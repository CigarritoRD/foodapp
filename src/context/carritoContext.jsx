import { useState } from "react";
import { createContext } from "react";
import { getLocalStorage, setLocalStograge } from "../helpers";

const keyLocalStorage = {
  carrito: "carrito",
};

const initialState = getLocalStorage(keyLocalStorage.carrito)
  ? JSON.parse(getLocalStorage(keyLocalStorage.carrito))
  : [];

export const carritoContext = createContext({});

const carritoContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(initialState);

  const addItemToCart = (item) => {
    setLocalStograge(keyLocalStorage.carrito, item);
    setCarrito(item);
  };

  const removeItemOfCart = (id) => {
    const itemToRemove = carrito.filter((article) => article.id !== id);
    setLocalStograge(keyLocalStorage.carrito, itemToRemove);
    setCarrito(itemToRemove);
  };

  const resetCart = () => {
    localStorage.setItem(keyLocalStorage.carrito, JSON.stringify([]));
    setCarrito([]);
  };

  return (
    <carritoContext.Provider value={{ carrito, addItemToCart, removeItemOfCart, resetCart }}>
      {children}
    </carritoContext.Provider>
  );
};

export default carritoContextProvider;
