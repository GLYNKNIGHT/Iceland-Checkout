import List from "../List/List"
import { useState, useEffect } from "react"
import {  Link } from "react-router-dom";
import Popup from "../Popup/Popup"

const Checkout = () =>{

    const [basket, setBasket] = useState();
    const [paymentPopup, setPaymentPopup] = useState(false);

    useEffect(()=> {
        fetch('http://localhost:8000/basket')
        .then(res =>{
          return res.json();
        })
        .then((data)=> {console.log(data); setBasket(data)});
    
      }, [])


return <div>
    {basket && <List basket = {basket}/>}

    {(paymentPopup === true)?<Popup basket={basket}/>: null} 
     <button onClick={()=> setPaymentPopup(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Single Payment Method</button>
     <p>|| </p>
    <Link to="split-payment"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Split Payment Method</button></Link>
    </div>
}

export default Checkout;