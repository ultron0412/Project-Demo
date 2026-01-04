/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleWishlist = (product) => {
    wishlist.find(i => i.id === product.id)
      ? setWishlist(wishlist.filter(i => i.id !== product.id))
      : setWishlist([...wishlist, product]);
  };

  return (
    <ShopContext.Provider value={{ cart, wishlist, addToCart, toggleWishlist }}>
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => useContext(ShopContext);
