import {useState, useEffect} from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import CheckoutSplit from '../Stages/checkout-split';
import Checkout from '../Stages/Checkout';
import SplitPayment from '../Stages/split-payment'
import {  Link } from "react-router-dom";

function App() {



  return (
    <div className="App">
      <header className="App-header">
       <Link to="/"> <h1 className="text-5xl font-bold underline">Checkout</h1></Link>
      </header>
      <section>
  
        
       
        <Routes >
          <Route index element={<Checkout />} />
          <Route path="split-payment" element={<SplitPayment/>} />
          <Route path="checkout-split" element={<CheckoutSplit/> } /> 
              </Routes>
      </section>
    </div>
  );
}

export default App;
