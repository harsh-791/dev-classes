import { createContext} from "react"; //{Named import}

const CartContext = createContext({
    cart: {},
    increaseQuantity: () => {},
    decreaseQuantity: () => {}
})

export default CartContext;
