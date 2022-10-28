import {useState, useEffect} from 'react'
import './App.css';
import List from "../List/List"
function App() {
const [basket, setBasket] = useState()


useEffect(()=> {
    fetch('http://localhost:8000/basket')
    .then(res =>{
      return res.json();
    })
    .then((data)=> {console.log(data); setBasket(data)});

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Checkout</h1>
      </header>
      <section>
      {basket && <List basket = {basket}/>}
        <button>Single Payment Method</button>
        <button>Split Payment Method</button>
      </section>
    </div>
  );
}

export default App;
