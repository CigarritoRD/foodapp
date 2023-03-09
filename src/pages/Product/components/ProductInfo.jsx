import React from "react";
import { useCarrito } from "../../../hooks/useCarrito";

const ProductInfo = ({ item }) => {
  const { addItemToCart } = useCarrito();
  return (
    <div className='border rounded-lg md:col-span-3 flex flex-col justify-between'>
      <h4 className='border-b capitalize text-2xl md:text-3xl p-4 md:pt-10 font-medium'>
        {item.nombre}
      </h4>
      <div className='md:text-5xl text-2xl font-bold p-4'>
        {item.precio} <span className='md:text-4xl text-xl'>$</span>
      </div>
      <div className='flex justify-between flex-col md:flex-row bg-gray-100 p-4 gap-2'>
        <button
          onClick={() => {
            addItemToCart(item);
          }}
          className='border rounded-full lg:px-6 md:px-4 py-2 bg-yellow-400'
        >
          Agregar al carrito
        </button>
        <div className='flex  justify-between items-center gap-4'>
          cantidad
          <div className='flex items-center gap-4'>
            <button>+</button>
            <button>-</button>
          </div>
        </div>
        <button className='border rounded-full lg:px-6 md:px-4 py-2 bg-white'>pagar</button>
      </div>
      <p className='text-md bg-gray-50 font-bold p-4'>Descuento: -4.00$</p>
    </div>
  );
};

export default ProductInfo;
