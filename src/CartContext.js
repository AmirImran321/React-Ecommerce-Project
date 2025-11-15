import { createContext, useContext, useState } from "react";
import * as cartService from "./service/cartService";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(cartService.getCart());

  const addToCart = (product) => setCart(cartService.addToCart(product));
  const removeFromCart = (id) => setCart(cartService.removeFromCart(id));
  const clearCart = () => setCart(cartService.clearCart());

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
