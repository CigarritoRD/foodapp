import React, { useState } from "react";
import { RiSearchLine, RiShoppingBasketLine, RiUser3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { cantidadDeArticulos } from "../../../helpers";
import { useCarrito } from "../../../hooks/useCarrito";
import CarritoModal from "../CarritoModal/CarritoModal";
import ListOfNavItems from "./ListOfNavItems";
import { Logo } from "./Logo";
const NavBar = () => {
  const { carrito } = useCarrito();
  const [showCarrito, setShowCarrito] = useState(false);

  const handleShowCarrito = () => {
    setShowCarrito(!showCarrito);
  };

  return (
    <nav className='  h-20 capitalize flex justify-between items-center max-w-[1200px] px-4 mx-auto'>
      <NavLink to={"home"}>
        <Logo />
      </NavLink>

      <ListOfNavItems />

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
