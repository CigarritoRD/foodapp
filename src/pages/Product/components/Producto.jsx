import React from "react";
import CardProduct from "./Card";
import ProductInfo from "./ProductInfo";

const Producto = ({ item }) => {
  return (
    <div className='w-screen grid grid-cols-1 md:grid-cols-5 gap-4 p-4 max-w-[1200px]'>
      <div className='md:col-span-2 pt-20 md:pt-0'>
        <CardProduct product={item} />
      </div>

      <ProductInfo item={item} />
    </div>
  );
};

export default Producto;
