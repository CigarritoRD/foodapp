import React from "react";
import { RiSearchLine, RiShoppingBasketLine, RiUser3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header className='bg-white top-0 left-0 right-0 mx-auto w-full z-50 shadow-md '>
      <nav className='   h-20 capitalize flex justify-between items-center max-w-[1200px] px-4'>
        <h1 className=' cursor-pointer text-2xl italic font-medium flex items-center justify-center'>
          Delicius <span className='font-bold text-3xl text-yellow-400'> FF</span>
        </h1>

        <ul className='md:flex hidden gap-4 font-medium text-md'>
          <li className='hover:text-yellow-400 duration-150 cursor-pointer'>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li className='hover:text-yellow-400 duration-150 cursor-pointer'>
            <Link to={"/menu"}>Menu</Link>
          </li>
          <li className='hover:text-yellow-400 duration-150 cursor-pointer'>
            <Link to={"/categoria"}>Categorias</Link>
          </li>
        </ul>

        <ul className='flex gap-4 '>
          <li className='cursor-pointer hover:bg-yellow-400 duration-200 border rounded-full p-1'>
            <Link to={"/busqueda"}>
              <RiSearchLine size={22} />
            </Link>
          </li>
          <li className='cursor-pointer hover:bg-yellow-400 duration-200 border rounded-full p-1'>
            <Link to={"/carrito"}>
              <RiShoppingBasketLine size={22} />
            </Link>
          </li>
          <li className='cursor-pointer hover:bg-yellow-400 duration-200 border rounded-full p-1'>
            <Link to={"/usuario"}>
              <RiUser3Line size={22} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
