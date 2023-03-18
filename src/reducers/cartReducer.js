import { getLocalStorage, itemToRemove, setLocalStograge, updateProducts } from '../helpers'
const LOCAL_STORAGE_KEYS = {
  CARRITO: 'carrito'
}
export const ACTION_REDUCER_TYPE = {
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  REMOVE_ONE_ITEM_OF_CART: 'REMOVE_ONE_ITEM_OF_CART',
  REMOVE_ITEM_OF_CART: 'REMOVE_ITEM_OF_CART',
  RESET_CART: 'RESET_CART'

}

export const initialCartState = JSON.parse(getLocalStorage(LOCAL_STORAGE_KEYS.CARRITO)) ?? []

const existeProducto = (carrito, item) => carrito.find((producto) => producto.id === item.id)

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  if (actionType === ACTION_REDUCER_TYPE.ADD_ITEM_TO_CART) {
    if (existeProducto(state, actionPayload)) {
      const updatedCart = updateProducts(state, actionPayload)
      setLocalStograge(LOCAL_STORAGE_KEYS.CARRITO, updatedCart)
      return updatedCart
    }
    const newItem = { ...actionPayload, cantidad: 1 }
    setLocalStograge(LOCAL_STORAGE_KEYS.CARRITO, [...state, newItem])
    return [...state, newItem]
  }

  if (actionType === ACTION_REDUCER_TYPE.REMOVE_ONE_ITEM_OF_CART) {
    if (existeProducto(state, actionPayload)) {
      const updatedCart = itemToRemove(state, actionPayload)
      setLocalStograge(LOCAL_STORAGE_KEYS.CARRITO, updatedCart)
      return updatedCart
    }
    const updatedCart = itemToRemove(state, actionPayload)
    return updatedCart
  }

  if (actionType === ACTION_REDUCER_TYPE.REMOVE_ITEM_OF_CART) {
    if (existeProducto(state, actionPayload)) {
      return state.filter(product => product.id !== actionPayload.id)
    }
    return state
  }
  if (actionType === ACTION_REDUCER_TYPE.RESET_CART) {
    setLocalStograge(LOCAL_STORAGE_KEYS.CARRITO, [])
    return initialCartState
  }
}
