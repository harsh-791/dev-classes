import logo from './logo.svg';
import './App.css';
import Products from './components/Products/Products';
import { a } from './components/Products/Products';
import { b } from './components/Products/Products';
import Effect from './components/Effect/Effect.js'
import NavBar from './components/NavBar/NavBar.js';
import Typing from './Typing.js';
import Tile from './components/Tile/Tile.js';
import Banner from './components/Banner/Banner.jsx';
import ProgressBar from './components/ProgressBar/ProgressBar.js';
import { useEffect, useState } from 'react';
import CartContext from './context/CartContext.js';

function App() {
  // console.log(a,b)
  const [percentage, setPercentage] = useState(0);
  // useEffect(() => {
  //  const interval = setInterval(() => {
  //  setPercentage((prev) => (prev < 100 ? prev + 10 : 100))
  //  },1000)
  //  return () => clearInterval(interval) ;
  // })
  let [cart,SetCart] = useState({});
  function increaseQuantity(product){
    const newCart = {...cart};
    if(!newCart[product.title]){
      newCart[product.title] ={
        ...product,
        quantity: 0
      };
    }
    newCart[product.title].quantity+=1;
    SetCart(newCart);
  }

  function decreaseQuantity(product){
    const newCart = {...cart};
    if(!newCart[product.title]){
      return;
    }
    newCart[product.title].quantity-=1;
    if(newCart[product.title].quantity <=0){
      delete newCart[product.title];
    }
    SetCart(newCart);
  }

  return (

    <CartContext.Provider value={{cart, increaseQuantity, decreaseQuantity}}>
      <div className="App">
        <Products/>        
      </div>
    </CartContext.Provider>
  );
}

export default App;
