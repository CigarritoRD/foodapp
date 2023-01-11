import React from "react";

const Hero = () => {
  return (
    <div className=' bg-white md:mt-20 grid md:grid-cols-2 gap-4 md:p-4 pt-10 max-w-[1200px] mx-auto'>
      <div className='px-4 lg:px-0 mx-auto flex flex-col gap-8 justify-center'>
        <h4 className='font-bold text-black text-4xl md:text-6xl'>
          La Casa del mejor Sabor y
          <span className='text-yellow-400 font-bold border-b-4 border-gray-800'> Sazon</span>
        </h4>
        <p className='text-slate-600 max-w-[600px] '>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, obcaecati cupiditate.
          Possimus
        </p>
        <div className='flex gap-4 sm:gap-8 flex-col sm:flex-row justify-between md:justify-start'>
          <button className=' w-full hover:scale-105 duration-200 px-4 md:px-8 text-lg py-4 bg-yellow-400 border border-yellow-400 rounded font-medium sm:w-fit'>
            Ordena Ahora
          </button>
          <button className='w-full hover:scale-105 duration-200 px-4 md:px-8 text-lg py-4 bg-yellow-400 border border-yellow-400 rounded font-medium sm:w-fit'>
            Reservar Mesa
          </button>
        </div>
      </div>
      <div className='flex relative items-center drop-shadow-xl justify-center  rounded-2xl overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src='https://o.remove.bg/downloads/08f31728-f012-44e3-aca6-70a8c3a980d0/pexels-dima-valkov-3864682-removebg-preview.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default Hero;
