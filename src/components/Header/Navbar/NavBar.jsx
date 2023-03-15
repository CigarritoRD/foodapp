import React, { useState } from "react";
import { RiSearchLine, RiShoppingBasketLine, RiUser3Line } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { cantidadDeArticulos } from "../../../helpers";
import { useCarrito } from "../../../hooks/useCarrito";
import CarritoModal from "../CarritoModal/CarritoModal";
import ListOfNavItems from "./ListOfNavItems";
import { Logo } from "./Logo";
import { motion } from "framer-motion";
const NavBar = () => {
  const { carrito } = useCarrito();
  const [showCarrito, setShowCarrito] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const handleShowCarrito = () => {
    setShowCarrito(!showCarrito);
  };
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target[0].value;
    if (!query) return setOpenSearch(!openSearch);
    navigate(`/comprar/?searchbar=${query}`);
  };

  return (
    <nav className='  h-20 capitalize flex justify-between items-center max-w-[1200px] px-4 mx-auto'>
      <NavLink to={"home"}>
        <Logo />
      </NavLink>

      <ListOfNavItems />
      <div className='flex items-center'>
        <div className=' relative'>
          <form onSubmit={handleSearch} className='flex items-center' action=''>
            <motion.input
              animate={
                openSearch
                  ? { width: "100%", border: "1px solid gold" }
                  : { width: "0px", border: "0px solid gold", opacity: 0 }
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`p-2  rounded-full outline-none transition-transform  duration-300`}
              placeholder='buscar...'
              type='text'
              name='search'
              id=''
            />
            <button
              type='submit'
              className='top-1 right-1 absolute cursor-pointer hover:bg-yellow-400 duration-200 border rounded-full p-1'
            >
              <RiSearchLine size={25} />
            </button>
          </form>
        </div>
        <ul className='flex gap-4'>
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
      </div>
      <CarritoModal showCarrito={showCarrito} cerrarCarrito={setShowCarrito} />
    </nav>
  );
};

export default NavBar;
