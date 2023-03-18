import { useEffect, useState } from 'react'
import { data } from '../Data/data'

export const useProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (!data) return
    const { productos } = data
    const mapedProducts = productos.map(product => ({
      id: product.id,
      nombre: product.nombre,
      descripcion: product.descripcion,
      categoria: product.categoria,
      imagen: product.imagen,
      precio: product.precio
    }))
    setProducts(mapedProducts)
  }, [])

  return { products }
}
