import { useReducer } from 'react'
import { showToast } from '../helpers'
import { TOAST_OPTIONS } from '../helpers/toastOptions.helpers'
import { ACTION_REDUCER_TYPE, cartReducer, initialCartState } from '../reducers/cartReducer'

export const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState)
  const addItemToCart = (product) => {
    dispatch({
      type: ACTION_REDUCER_TYPE.ADD_ITEM_TO_CART,
      payload: product
    })
    showToast(TOAST_OPTIONS.SUCCESS.TYPE, TOAST_OPTIONS.SUCCESS.TEXT)
  }

  const removeItemOfCart = (product) => {
    dispatch({
      type: ACTION_REDUCER_TYPE.REMOVE_ITEM_OF_CART,
      payload: product
    })
    showToast(TOAST_OPTIONS.WARN.TYPE, TOAST_OPTIONS.WARN.TEXT)
  }
  const removeOneItemOfCart = (product) => {
    dispatch({
      type: ACTION_REDUCER_TYPE.REMOVE_ONE_ITEM_OF_CART,
      payload: product
    })
    showToast(TOAST_OPTIONS.WARN.TYPE, TOAST_OPTIONS.WARN.TEXT)
  }

  const resetCart = () => dispatch({
    type: ACTION_REDUCER_TYPE.RESET_CART
  })

  return { addItemToCart, removeItemOfCart, removeOneItemOfCart, resetCart, state }
}
