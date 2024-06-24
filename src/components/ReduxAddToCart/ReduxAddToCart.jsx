function AddToCart({product}){
    const { cart, increaseQuantity, decreaseQuantity} = useContext(CartContext);
    function increase(){
        // increaseQuantity(product);
    }

    function decrease(){
        // decreaseQuantity(product);
    }
    const quantity = cart[product.title] ? cart[product.title].quantity : 0;
    if(quantity === 0){
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