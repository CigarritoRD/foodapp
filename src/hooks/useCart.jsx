import { useContext } from 'react'
import { cartContext } from '../context/cartContext'

export const useCart = () => {
  const { cart, addItemToCart, removeItemOfCart, removeOneItemOfCart, resetCart } = useContext(cartContext)
  return { cart, addItemToCart, removeItemOfCart, removeOneItemOfCart, resetCart }
}
