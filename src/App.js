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
    <div className="App">
      <Products cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/> 
      {/* <Effect /> */}
      {/* <NavBar />
      <Typing text={[
        "SOFTWARE DEVELOPER",
        "MERN STACK DEVELOPER"
      ]}
      typingSpeed ={100}
      deletingSpeed = {50}
      duration = {1000} />
      <Tile 
        header={"Class is going on"}
        subHeader={"Class must go on"}
        img={"https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"}
        text={"HOLA AMIGO"}
        link={"https://www.scaler.com/academy/mentee-dashboard/class/230122/session?joinSession=1"}
        linkText={"Development_Class"}
        position={"img-right"}
        bgColor={"red"}
      />
      <Banner />
      <ProgressBar 
        percentage={percentage}
      /> */}

      


    </div>
  );
}

export default App;
