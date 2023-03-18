import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'

export const cartContext = createContext({})

const CartContextProvider = ({ children }) => {
  const { addItemToCart, removeItemOfCart, removeOneItemOfCart, resetCart, state } = useCartReducer()

  return (
    <cartContext.Provider
    value={{
      cart: state,
      addItemToCart,
      removeItemOfCart,
      removeOneItemOfCart,
      resetCart
    }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartContextProvider
