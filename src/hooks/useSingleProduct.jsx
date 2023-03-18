import { useEffect, useState } from 'react'
import { useProductsContext } from './useProductsContext'

export const useSingleProduct = (nombre) => {
  const { products } = useProductsContext()
  const [singleProduct, setSingleProduct] = useState([])

  useEffect(() => {
    console.log({ products, nombre })
    if (!products && !nombre) return
    const product = products.filter((item) => item.nombre === nombre)
    setSingleProduct(product)
  }, [products, nombre])

  return { singleProduct }
}
