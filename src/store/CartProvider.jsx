import { useReducer } from "react";
import CartContext from "./cart-context"

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer =(state, action)=>{
}

const CartProvider = (props) =>{

  const addItemHandler =(item)=>{};

  const removeItemHandler =(id)=>{};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }
  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider