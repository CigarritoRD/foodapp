import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProductsContextProvider from '../context/productsContext'
const Home = React.lazy(() => import('../pages/Home/Home'))
const IniciarSesion = React.lazy(() => import('../pages/LogIn/IniciarSesion'))
const CrearCuenta = React.lazy(() => import('../pages/SignUp/CrearCuenta'))
const Menu = React.lazy(() => import('../pages/Menu/Menu'))
const Shop = React.lazy(() => import('../pages/Shop/Shop'))
const Product = React.lazy(() => import('../pages/Product/Product'))
const Busqueda = React.lazy(() => import('../pages/Search/Busqueda'))
const Usuario = React.lazy(() => import('../pages/User/Usuario'))
const Cart = React.lazy(() => import('../pages/Cart/Cart'))
const NotFound = React.lazy(() => import('../pages/NotFound/NotFound'))

const Router = () => {
  const BackGroundSite = () => <div className='-z-10 absolute bg-[url(./assets/pattern.svg)] h-full opacity-5 w-full'></div>
  return (
    <div className=' relative'>
      <BackGroundSite />
      <React.Suspense fallback={<p>cargando...</p>}>
        <ProductsContextProvider>
          <Routes>
            <Route path='/' element={<Navigate to='home' />} />
            <Route path={'home'} element={<Home />} />
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
        </ProductsContextProvider>
      </React.Suspense>
    </div>
  )
}

export default Router
