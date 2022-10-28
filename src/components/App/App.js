import {useState, useEffect} from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import CheckoutSplit from '../Stages/checkout-split';
import Checkout from '../Stages/Checkout';
import SplitPayment from '../Stages/split-payment'


function App() {



  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-5xl font-bold underline">Checkout</h1>
      </header>
      <section>
  
        
       
        <Routes >
          <Route index element={<Checkout />} />
          {/*<Route path="checkout-split" element={<Checkout-split />} />
          <Route path="split-payment" element={<Split-Payment />} />
      */}
        </Routes>
      </section>
    </div>
  );
}

export default App;
