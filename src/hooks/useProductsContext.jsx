import { useContext } from 'react'
import { ProductsContext } from '../context/productsContext'

export const useProductsContext = () => {
  const { products } = useContext(ProductsContext)

  return { products }
}
