import { Navigate, Route, Routes } from "react-router-dom";
import CarritoContextProvider from "../context/carritoContext";
import MenuContextProvider from "../context/menuContext";
import {
  Busqueda,
  Cart,
  CrearCuenta,
  Home,
  IniciarSesion,
  Menu,
  NotFound,
  Product,
  Shop,
  Usuario,
} from "../pages";

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
          <Route path='comprar' element={<Shop />} />
          <Route path='comprar/:nombre' element={<Product />} />
          <Route path='busqueda' element={<Busqueda />} />
          <Route path='usuario' element={<Usuario />} />
          <Route path='carrito' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MenuContextProvider>
    </div>
  );
};

export default Router;
