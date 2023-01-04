import React from "react";

const Card = () => {
  return (
    <div className='card shadow-xl shadow-black/30 flex flex-col relative overflow-y-clip rounded-xl w-full min-w-[200px] max-w-[280px] h-[300px]'>
      <div className='border overflow-hidden absolute h-[230px] w-[110%] top-[-40px] -left-3 rotate-12 rounded-2xl'>
        <img
          className='w-full -rotate-12 h-full rounded-xl mt-6   object-cover'
          src='https://images.pexels.com/photos/552056/pexels-photo-552056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
      </div>
      <div className='flex-1'></div>

      <div className='flex flex-col gap-2 p-4 '>
        <p className='text-sm'>⭐⭐⭐⭐⭐</p>
        <p className='font-bold'>Pizza 4 quesos</p>
        <div className='flex items-center justify-between'>
          <p className='text-xl font-bold'>$540.00</p>
          <p>canasta</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
