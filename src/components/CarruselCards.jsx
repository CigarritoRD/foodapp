import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri'
import Card from './ProductCard/Card'

import { useProductsContext } from '../hooks/useProductsContext'
import { CategoriaBoton, CategoriaBotones, CategoriaInfo, CategoriaTitulo } from './index'
import { ProductCardImage, ProductCardInfo, ProductStarsFiller } from './ProductCard'

const CarruselCards = ({ filtro, pre, titulo }) => {
  const { products } = useProductsContext()

  const ref = useRef(null)

  const isInView = useInView(ref, { once: true })

  const comidasFiltradas = filtro ? products.filter((comida) => comida.categoria === filtro) : products

  return (
    <motion.div
      ref={ref}
      style={{ overflow: 'hidden' }}
      initial={{ opacity: 0, y: '50%' }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView && '0%' }}
      transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
      className='max-w-[1200px] mx-auto bg-slate-50'
    >
      <CategoriaInfo>
        <CategoriaTitulo pre={pre} titulo={titulo} />
        <CategoriaBotones>
          <CategoriaBoton button={<RiArrowDropLeftLine />} />
          <CategoriaBoton button={<RiArrowDropRightLine />} />
        </CategoriaBotones>
      </CategoriaInfo>
      <div className='flex overflow-x-scroll py-8 px-4 gap-2 md:gap-4 scrollbar-hide'>
        {comidasFiltradas.map((comida) => {
          return (
            <Card
              key={comida.imagen}
              image={<ProductCardImage image={comida.imagen} />}
              data={
                <ProductCardInfo>
                  <ProductStarsFiller />
                  <p className='font-bold text-sm'>{comida.nombre}</p>
                  <div className='flex items-center justify-between'>
                    <p className='text-2xl font-bold'>${comida.precio}.00</p>
                  </div>
                </ProductCardInfo>
              }
              item={comida}
            />
          )
        })}
      </div>
    </motion.div>
  )
}

export default CarruselCards
