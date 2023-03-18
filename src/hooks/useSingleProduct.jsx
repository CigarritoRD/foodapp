import { useEffect, useState } from 'react'
import { useProductsContext } from './useProductsContext'

export const useSingleProduct = (nombre) => {
  const { products } = useProductsContext()
  const [singleProduct, setSingleProduct] = useState([])

  const getOneProduct = (products, nombre) => {
    return products.filter((item) => item.nombre === nombre)
  }
  useEffect(() => {
    setSingleProduct(getOneProduct(products, nombre))
  }, [nombre])

  return { singleProduct }
}
