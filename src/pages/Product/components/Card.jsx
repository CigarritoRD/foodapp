import React from "react";

const CardProduct = ({ product }) => {
  return (
    <div
      key={product.imagen}
      className='min-h-[300px] min-w-[280px] shadow-xl shadow-black/10 flex flex-col relative overflow-clip rounded-xl w-full '
    >
      <div className='border overflow-hidden absolute h-[300px] w-[110%] top-[-65px] -left-3 rotate-12 rounded-2xl'>
        <img
          className='w-full -rotate-12 h-full rounded-xl mt-10 object-cover'
          src={product.imagen}
          alt=''
        />
      </div>
      <div className='flex-1'></div>

      <div className='flex flex-col gap-1 p-3 text-gray-600'>
        <p className='text-lg'>⭐⭐⭐⭐⭐</p>

        <div className='flex items-center justify-between'></div>
      </div>
    </div>
  );
};

export default CardProduct;
