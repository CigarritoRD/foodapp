import { createContext } from 'react'
import { useProducts } from '../hooks/useProducts'

export const ProductsContext = createContext()

const ProductsContextProvider = ({ children }) => {
  const { products } = useProducts()
  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>
}

export default ProductsContextProvider
