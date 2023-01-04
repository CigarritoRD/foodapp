import React from "react";

const Hero = () => {
  return (
    <div className='md:h-[600px] h-[400px] relative mt-20 flex items-center justify-start'>
      <div className='h-full w-full absolute -z-10 bg-gradient-to-r from-black'></div>
      <div className='h-full w-full absolute -z-20'>
        <img
          className='w-full h-full object-cover'
          src='https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
      </div>
      <div className='max-w-[1200px] w-full px-4 lg:px-0 mx-auto flex flex-col gap-8'>
        <h4 className='font-bold text-white text-6xl md:text-8xl max-w-[600px]'>
          La Casa del mejor Sabor y
          <span className='text-yellow-400 font-bold border-b-4 border-gray-800'> Sazon</span>🔥
        </h4>
        <p className='text-slate-300 max-w-[600px] '>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, obcaecati cupiditate.
          Possimus
        </p>
        <div className='flex gap-8'>
          <button className='px-8 text-lg py-4 bg-yellow-400 border border-yellow-400 rounded font-medium w-fit'>
            Ordena Ahora
          </button>
          <button className='px-8  text-lgpy-4 border-yellow-400 border-2 text-yellow-300 rounded font-medium w-fit'>
            Reservar Mesa
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
