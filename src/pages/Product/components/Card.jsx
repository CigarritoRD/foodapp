import React from "react";
import { RiShoppingBasketLine } from "react-icons/ri";

const CardProduct = ({ product }) => {
  return (
    <div
      key={product.imagen}
      className='min-h-[300px] min-w-[280px] shadow-xl h-full shadow-black/10 flex flex-col relative overflow-y-clip rounded-xl w-full '
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
        <p className='text-sm'>⭐⭐⭐⭐⭐</p>

        <div className='flex items-center justify-between'>
          <RiShoppingBasketLine
            size={20}
            color={"gray"}
            className={
              "border rounded-full h-8 w-8 bg-yellow-400 p-1 hover:shadow-md hover:scale-105 hover:cursor-pointer"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
