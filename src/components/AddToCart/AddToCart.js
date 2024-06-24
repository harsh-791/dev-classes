import { useContext } from "react";
import CartContext from "../../context/CartContext";
function AddToCart({product}){
    const { cart, increaseQuantity, decreaseQuantity} = useContext(CartContext);
    function increase(){
        increaseQuantity(product);
    }

    function decrease(){
        decreaseQuantity(product);
    }
    const quantity = cart[product.title] ? cart[product.title].quantity : 0;
    if(quantity == 0){
        return(
            <div>
                <button onClick={increase}>AddToCart</button>
            </div>
        )
    }
    else{
        return(
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>
            </div>
        )
    }
}

export default AddToCart;


// CART
// sort of HashMap i.e, Key -> Value pair
// Create an object of the item having name, category, price, etc; and store them as key in hashmap;
// Item1 name -> Quantity
//Item2 name -> Quantity



//CART
// array of object:
//                  [{id:1, quantity:10},{id:2, quantity:10},{id:3, quantity:10},{id:4, quantity:10},...];

//Object of object:
//                  {id:{id:1, quantity:10}, id:{id:2, quantity:10}, id:{id:3, quantity:10},...};
