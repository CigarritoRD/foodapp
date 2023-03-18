import React from 'react'

const ProductCardImage = ({ image }) => {
  return (
    <div className='border overflow-hidden absolute h-[230px] w-[110%] top-[-40px] -left-3 rotate-12 rounded-2xl'>
      <img className='w-full -rotate-12 h-full rounded-xl mt-6   object-cover' src={image} alt='' loading='lazy' />
    </div>
  )
}

export default ProductCardImage
