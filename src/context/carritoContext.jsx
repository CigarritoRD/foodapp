import { useState } from "react";
import { createContext } from "react";

import { getLocalStorage, itemToRemove, setLocalStograge, updateProducts } from "../helpers";

const keyLocalStorage = {
  carrito: "carrito",
};

const initialState = getLocalStorage(keyLocalStorage.carrito)
  ? JSON.parse(getLocalStorage(keyLocalStorage.carrito))
  : [];

export const carritoContext = createContext({});

const carritoContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(initialState);

  // ADD ITEM TO CART

  const addItemToCart = (item) => {
    const existeProducto = carrito.find((producto) => producto.id === item.id);

    if (existeProducto) {
      const updatedCart = updateProducts(carrito, item);
      setCarrito(updatedCart);
      setLocalStograge(keyLocalStorage.carrito, updatedCart);
    } else {
      setCarrito((prev) => {
        const newItem = { ...item, cantidad: 1 };
        setLocalStograge(keyLocalStorage.carrito, [...carrito, newItem]);
        return [...prev, newItem];
      });
    }
  };

  // REMOVE ITEM OF CART
  const removeItemOfCart = (item) => {
    const { id } = item;
    const updatedCart = itemToRemove(carrito, item);
    if (id) {
      setCarrito(updatedCart);
      setLocalStograge(keyLocalStorage.carrito, updatedCart);
    }
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
