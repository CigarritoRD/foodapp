import { useContext } from 'react'
import { ProductsContext } from '../context/productsContext'

export const useProductsContext = () => {
  const { products, loading } = useContext(ProductsContext)

  return { products, loading }
}
