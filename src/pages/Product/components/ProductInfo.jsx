import React from 'react'

const ProductInfo = ({ children }) => {
  return (
    <div className='border rounded-lg md:col-span-3 flex flex-col justify-between'>{children}</div>
  )
}

export default ProductInfo
