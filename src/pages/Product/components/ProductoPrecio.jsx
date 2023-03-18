import React from 'react'

const ProductoPrecio = ({ precio }) => {
  return (
    <div className='md:text-2xl text-lg p-4 flex justify-between'>
      <p>precio por unidad: </p>
      <div>
        <strong className='md:text-4xl text-2xl'>{precio} </strong>
        <span className='md:text-4xl text-xl'>$</span>
      </div>
    </div>
  )
}

export default ProductoPrecio
