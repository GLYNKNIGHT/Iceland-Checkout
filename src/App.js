import {useState, useEffect} from 'react'
import './App.css';

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
    </div>
  );
}

export default App;
