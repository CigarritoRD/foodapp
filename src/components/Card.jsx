import React from "react";
import { RiShoppingBasketLine } from "react-icons/ri";
const Card = ({ data }) => {
  return (
    <div className='card shadow-xl shadow-black/10 flex flex-col relative overflow-y-clip rounded-xl w-full min-w-[200px] max-w-[280px] h-[300px]'>
      <div className='border overflow-hidden absolute h-[230px] w-[110%] top-[-40px] -left-3 rotate-12 rounded-2xl'>
        <img
          className='w-full -rotate-12 h-full rounded-xl mt-6   object-cover'
          src={data.imagen}
          alt=''
        />
      </div>
      <div className='flex-1'></div>

      <div className='flex flex-col gap-1 p-3 text-gray-600'>
        <p className='text-sm'>⭐⭐⭐⭐⭐</p>
        <p className='font-bold text-sm'>{data.nombre}</p>
        <div className='flex items-center justify-between'>
          <p className='text-2xl font-bold'>${data.precio}.00</p>
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

export default Card;
