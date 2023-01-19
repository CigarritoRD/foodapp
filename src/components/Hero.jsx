import React from "react";

const Hero = () => {
  return (
    <div className='rounded-xl bg-white md:mt-20 grid md:grid-cols-2 gap-4 md:p-4 pt-10 max-w-[1200px] mx-auto'>
      <div className='px-4 lg:px-0 mx-auto flex flex-col gap-8 justify-center'>
        <h4 className='font-bold text-black text-4xl md:text-6xl'>
          La Casa del mejor Sabor y
          <span className='text-yellow-400 font-bold border-b-4 border-gray-800'> Sazon</span>
        </h4>
        <p className='text-slate-600 max-w-[600px] '>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, obcaecati cupiditate.
          Possimus
        </p>
        <div className='flex gap-4 sm:gap-4 flex-col md:flex-row justify-between md:justify-start'>
          <button className=' w-full hover:scale-105 duration-200 px-4 md:px-6 text-md py-4 bg-yellow-400 border border-yellow-400 rounded font-medium md:w-fit'>
            Ordena Ahora
          </button>
          <button className='w-full hover:scale-105 duration-200 px-4 md:px-6 text-md py-4 bg-yellow-400 border border-yellow-400 rounded font-medium md:w-fit'>
            Reservar Mesa
          </button>
        </div>
      </div>
      <div className='flex relative items-center drop-shadow-xl justify-center p-4 md:p-0 rounded-2xl overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src='https://es.rc-cdn.community.thermomix.com/recipeimage/s3x1gsfi-3d839-205138-cfcd2-3qsm0j1y/148f620b-8050-4bd2-9dd6-aca7af1154e2/main/hamburguesa-de-ternera.jpg'
          alt=''
        />
      </div>
    </div>
  );
};

export default Hero;
