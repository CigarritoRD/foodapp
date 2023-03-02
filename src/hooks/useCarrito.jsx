import { useContext } from "react";
import { carritoContext } from "../context/carritoContext";

export const useCarrito = () => {
  const { carrito, addItemToCart, removeItemOfCart, resetCart } = useContext(carritoContext);
  return { carrito, addItemToCart, removeItemOfCart, resetCart };
};
