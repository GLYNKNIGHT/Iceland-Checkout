import {useState} from 'react'

const Popup = ({basket})=> {

const [basketTotal, setBasketTotal] = useState(0)






    return<div> 
    <h2>Checkout Pop Up </h2>
    <h2>{basketTotal}</h2>
    </div>
}

export default Popup;