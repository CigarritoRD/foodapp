import React from "react";
import Home from "../pages/Home";
import Busqueda from "../pages/Busqueda";
import Carrito from "../pages/Carrito";
import Categoria from "../pages/Categoria";
import CrearCuenta from "../pages/CrearCuenta";
import IniciarSesion from "../pages/IniciarSesion";
import Menu from "../pages/Menu";
import NotFound from "../pages/NotFound";
import Pagar from "../pages/Pagar";
import Usuario from "../pages/Usuario";
import { Navigate, Route, Routes } from "react-router-dom";
import MenuContextProvider from "../context/menuContext";

const Router = () => {
  return (
    <div className=' relative'>
      <div className='-z-10 absolute bg-[url(./assets/pattern.svg)] h-full opacity-5 w-full'></div>
      <MenuContextProvider>
        <Routes>
          <Route path='/' element={<Navigate to='home' />} />
          <Route path='home' element={<Home />} />
          <Route path='iniciarsesion' element={<IniciarSesion />} />
          <Route path='crearcuenta' element={<CrearCuenta />} />
          <Route path='menu' element={<Menu />} />
          <Route path='menu/:id' element={<Menu />} />
          <Route path='categorias' element={<Categoria />} />
          <Route path='categorias/:nombre' element={<Categoria />} />
          <Route path='busqueda' element={<Busqueda />} />
          <Route path='usuario' element={<Usuario />} />
          <Route path='carrito' element={<Carrito />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MenuContextProvider>
    </div>
  );
};

export default Router;
