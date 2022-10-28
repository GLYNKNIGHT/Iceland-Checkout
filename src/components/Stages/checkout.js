import List from "../List/List"
import { useState, useEffect } from "react"

const Checkout = () =>{

    const [basket, setBasket] = useState()
    useEffect(()=> {
        fetch('http://localhost:8000/basket')
        .then(res =>{
          return res.json();
        })
        .then((data)=> {console.log(data); setBasket(data)});
    
      }, [])


return <div>
    {basket && <List basket = {basket}/>}
      
    <button className=''>Single Payment Method</button>
    <button >Split Payment Method</button>
    </div>
}

export default Checkout;