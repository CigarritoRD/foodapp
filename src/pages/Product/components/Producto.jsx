import React from 'react'
import CardProduct from './Card'
import ProductDescripcion from './ProductDescripcion'
import ProductInfo from './ProductInfo'
import ProductoAgregarAlCarrito from './ProductoAgregarAlCarrito'
import ProductoCantidad from './ProductoCantidad'
import ProductoPrecio from './ProductoPrecio'
import ProductTitle from './ProductTitle'

const Producto = ({ item }) => {
  return (
    <div className='w-screen grid grid-cols-1 md:grid-cols-5 gap-4 p-4 max-w-[1200px]'>
      <div className='md:col-span-2 pt-20 md:pt-0'>
        <CardProduct product={item} />
      </div>

      <ProductInfo>
        <ProductTitle titulo={item.nombre} />
        <ProductDescripcion descripcion={item.descripcion} />
        <ProductoPrecio precio={item.precio} />
        <div className='flex justify-between flex-col md:flex-row bg-gray-100 p-4 gap-2'>
          <ProductoAgregarAlCarrito item={item}>Agregar al carrito</ProductoAgregarAlCarrito>
          <ProductoCantidad />
          <button className='border rounded-full lg:px-6 md:px-4 py-2 bg-white'>pagar</button>
        </div>
        <p className='text-md bg-gray-50 font-bold p-4'>Descuento: -4.00$</p>
      </ProductInfo>
    </div>
  )
}

export default Producto
