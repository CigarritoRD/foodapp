import { createContext, useEffect, useState } from 'react'
import { data } from '../Data/data'

export const ProductsContext = createContext()

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(data.productos)
  }, [data])

  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>
}

export default ProductsContextProvider
