import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MenuContextProvider from "../context/menuContext";

const Home = React.lazy(() => import("../pages/Home/Home"));
const IniciarSesion = React.lazy(() => import("../pages/LogIn/IniciarSesion"));
const CrearCuenta = React.lazy(() => import("../pages/SignUp/CrearCuenta"));
const Menu = React.lazy(() => import("../pages/Menu/Menu"));
const Shop = React.lazy(() => import("../pages/Shop/Shop"));
const Product = React.lazy(() => import("../pages/Product/Product"));
const Busqueda = React.lazy(() => import("../pages/Search/Busqueda"));
const Usuario = React.lazy(() => import("../pages/User/Usuario"));
const Cart = React.lazy(() => import("../pages/Cart/Cart"));
const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));

const Router = () => {
  return (
    <div className=' relative'>
      <div className='-z-10 absolute bg-[url(./assets/pattern.svg)] h-full opacity-5 w-full'></div>
      <MenuContextProvider>
        <Routes>
          <Route path='/' element={<Navigate to='home' />} />
          <Route
            path='home'
            element={
              <React.Suspense fallback={<p>cargando...</p>}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path='iniciarsesion'
            element={
              <Route
                path='home'
                element={
                  <React.Suspense fallback={<p>cargando...</p>}>
                    <IniciarSesion />
                  </React.Suspense>
                }
              />
            }
          />
          <Route
            path='crearcuenta'
            element={
              <React.Suspense fallback={<p>cargando...</p>}>
                <CrearCuenta />
              </React.Suspense>
            }
          />
          <Route
            path='menu'
            element={
              <React.Suspense fallback={<p>cargando...</p>}>
                <Menu />
              </React.Suspense>
            }
          />
          <Route
            path='comprar'
            element={
              <React.Suspense fallback={<p>cargando...</p>}>
                <Shop />
              </React.Suspense>
            }
          />

          <Route
            path='comprar/:nombre'
            element={
              <React.Suspense fallback={<p>cargando...</p>}>
                <Product />
              </React.Suspense>
            }
          />
          <Route
            path='busqueda'
            element={
              <React.Suspense fallback={<p>cargando...</p>}>
                <Busqueda />
              </React.Suspense>
            }
          />
          <Route
            path='usuario'
            element={
              <React.Suspense fallback={<p>cargando...</p>}>
                <Usuario />
              </React.Suspense>
            }
          />
          <Route
            path='carrito'
            element={
              <React.Suspense fallback={<p>cargando...</p>}>
                <Cart />
              </React.Suspense>
            }
          />
          <Route
            path='*'
            element={
              <React.Suspense fallback={<p>cargando...</p>}>
                <NotFound />
              </React.Suspense>
            }
          />
        </Routes>
      </MenuContextProvider>
    </div>
  );
};

export default Router;
