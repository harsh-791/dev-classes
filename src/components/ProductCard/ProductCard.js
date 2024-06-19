import { useRef } from "react";
import { useState } from "react";
import AddToCart from "../AddToCart/AddToCart";
import './ProductCard.css'

function ProductCard({ product, cart, increaseQuantity, decreaseQuantity }){
    // console.log(props); 
    let pRef = useRef(0);
    let iRef = useRef(0);
    let oRef = useRef(0);
    let [inputV, setInputV] = useState('Class');
    function printTitle(){
        console.log("Title Printed")
        console.log(pRef.current.innerText);
        if(pRef.current.style.display === "none"){
            pRef.current.style.display = "block";
        }
        else{
            pRef.current.style.display = "none";
        }
    }

    function displayOutput(e){
        // console.log(iRef.current.value);
        // console.log(oRef.current);
        // oRef.current.innerText = `Output Here - ${iRef.current.value}`;
         setInputV(e.target.value);
    }

    return(
        <div className="product-card">
            {/* <p onClick={printTitle}> {title} </p>
            <p ref={pRef}> {price.value} </p> */}
            <input type="text" onChange={displayOutput} ref={iRef} value={inputV}/>
            <p ref={oRef}>Over here the Output would arrive - {inputV}</p>
            <AddToCart product={product}  cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
        </div>
    )
}

export default ProductCard;