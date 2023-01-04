import React from "react";
import { RiSearchLine, RiShoppingBasketLine, RiUser3Line } from "react-icons/ri";
const NavBar = () => {
  return (
    <nav className=' bg-white z-50 top-0 left-0 right-0 mx-auto fixed w-full h-20 shadow-sm capitalize flex justify-between items-center max-w-[1200px] px-4'>
      <h1 className=' cursor-pointer text-2xl italic font-medium flex items-center justify-center'>
        Delicius <span className='font-bold text-3xl text-yellow-400'> FF</span>
      </h1>

      <ul className='md:flex hidden gap-4 font-medium text-md'>
        <li className='hover:text-yellow-400 duration-150 cursor-pointer'>Inicio</li>
        <li className='hover:text-yellow-400 duration-150 cursor-pointer'>Nuestro menu</li>
        <li className='hover:text-yellow-400 duration-150 cursor-pointer'>categorias</li>
      </ul>

      <ul className='flex gap-4 '>
        <li className='cursor-pointer hover:bg-yellow-400 duration-200 border rounded-full p-1'>
          <RiSearchLine size={22} />
        </li>
        <li className='cursor-pointer hover:bg-yellow-400 duration-200 border rounded-full p-1'>
          <RiShoppingBasketLine size={22} />
        </li>
        <li className='cursor-pointer hover:bg-yellow-400 duration-200 border rounded-full p-1'>
          <RiUser3Line size={22} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
