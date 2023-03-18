import React from "react";
import { useCarrito } from "../../../hooks/useCart";

const ProductInfo = ({ children }) => {
  const { addItemToCart } = useCarrito();
  return (
    <div className='border rounded-lg md:col-span-3 flex flex-col justify-between'>{children}</div>
  );
};

export default ProductInfo;
