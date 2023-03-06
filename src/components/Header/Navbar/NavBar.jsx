import React, { useState } from "react";
import { RiSearchLine, RiShoppingBasketLine, RiUser3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { cantidadDeArticulos } from "../../../helpers";
import { useCarrito } from "../../../hooks/useCarrito";
import CarritoModal from "../CarritoModal/CarritoModal";
const NavBar = () => {
  const { carrito } = useCarrito();
  const [showCarrito, setShowCarrito] = useState(false);
  const handleShowCarrito = () => {
    setShowCarrito(!showCarrito);
  };

  return (
    <nav className='  h-20 capitalize flex justify-between items-center max-w-[1200px] px-4 mx-auto'>
      <NavLink to={"home"}>
        <h1 className=' cursor-pointer text-2xl italic font-medium flex items-center justify-center'>
          Delicius <span className='font-bold text-3xl text-yellow-400'> FF</span>
        </h1>
      </NavLink>

      <ul className='md:flex hidden gap-4 text-md'>
        <li>
          <NavLink
            className={({ isActive }) =>
              "hover:text-yellow-400 duration-150 cursor-pointer active:font-bold " +
              (isActive ? "font-bold text-yellow-400" : "")
            }
            to={"home"}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `hover:text-yellow-400 duration-150 cursor-pointer  
              ${isActive ? "font-bold text-yellow-400" : " "}`
            }
            to={"menu"}
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `hover:text-yellow-400 duration-150 cursor-pointer  
                          ${isActive ? "font-bold text-yellow-400" : ""}`
            }
            to={"comprar"}
          >
            Comprar
          </NavLink>
        </li>
      </ul>

      <ul className='flex gap-4 '>
        <li className='cursor-pointer hover:bg-yellow-400 duration-200 border rounded-full p-1'>
          <NavLink to={"busqueda"}>
            <RiSearchLine size={25} />
          </NavLink>
        </li>
        <li
          onClick={handleShowCarrito}
          className='relative cursor-pointer hover:bg-yellow-400 duration-200 border rounded-full p-1'
        >
          <div className='p-3 absolute -top-3 -right-2 text-sm bg-green-600 h-4 w-4 rounded-full flex justify-center items-center  text-white'>
            {cantidadDeArticulos(carrito)}
          </div>
          <RiShoppingBasketLine size={25} />
        </li>
        <li className='cursor-pointer hover:bg-yellow-400 duration-200 border rounded-full p-1'>
          <NavLink to={"usuario"}>
            <RiUser3Line size={25} />
          </NavLink>
        </li>
      </ul>
      <CarritoModal showCarrito={showCarrito} cerrarCarrito={setShowCarrito} />
    </nav>
  );
};

export default NavBar;
