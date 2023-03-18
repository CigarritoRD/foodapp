import { toast } from 'react-toastify'

export const itemsFiltrados = (categoria, datos) =>
  datos.filter((item) => item.categoria === categoria)

export const sumaTotal = (cart) => {
  const arrayDePrecios = cart.map((articulo) => articulo.precio * articulo.cantidad)
  const total = cart.length
    ? arrayDePrecios.reduce((total, precioActual) => total + precioActual)
    : 0
  return total
}

export const cantidadDeArticulos = (cart) => {
  const total = cart.length ? cart.reduce((total, { cantidad }) => total + cantidad, 0) : 0
  return total
}

export const itemToRemove = (cart, item) => {
  const itemToRemove =
    item.cantidad === 1
      ? cart.filter((articulo) => articulo.id !== item.id)
      : cart.map((articulo) => {
        if (articulo.id === item.id) return { ...articulo, cantidad: articulo.cantidad - 1 }
        return articulo
      })
  return itemToRemove
}

export const updateProducts = (cart, item) => {
  const updatedProducts = cart.map((articulo) => {
    if (articulo.id === item.id) {
      return { ...articulo, cantidad: articulo.cantidad ? (articulo.cantidad += 1) : 1 }
    } else {
      return articulo
    }
  })

  return updatedProducts
}

export const showToast = (type, textToShow) => {
  toast[type](textToShow, {
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })
}
