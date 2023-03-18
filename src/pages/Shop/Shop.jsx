import {
  Card,
  CategoriasCarrusel,
  HeroPages,
  ProductCardImage,
  ProductCardInfo,
  ProductStarsFiller
} from '../../components'
import SearchForm from '../../components/SearchForm/SearchForm'
import { filteredItems } from '../../helpers/filtrarProductos'
import { useProductsContext } from '../../hooks/useProductsContext'
import { motion, AnimatePresence } from 'framer-motion'
import useSearch from '../../hooks/useSearch'
import { useSearchParams } from 'react-router-dom'

const Shop = () => {
  const { products } = useProductsContext()
  const [URLSearchParams] = useSearchParams()
  const param = URLSearchParams.get('searchbar')
  const categoria = URLSearchParams.get('categoria')

  const { term, setTerm } = useSearch(param)

  const onChangeHandler = (e) => {
    e.preventDefault()
    const { value } = e.target
    setTerm(value)
  }

  const platosFiltrados = filteredItems(products, term, categoria)

  return (
    <>
      <HeroPages />
      <div className='max-w-[1200px] mx-auto p-4'>
        <SearchForm value={term} onChangeHandler={onChangeHandler} />
        <CategoriasCarrusel />
        <motion.div
          layout
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))'
          }}
          className=' grid gap-2'
        >
          <AnimatePresence>
            {platosFiltrados.map((item) => (
              <Card
                key={item.id}
                data={
                  <ProductCardInfo>
                    <ProductStarsFiller />
                    <p className='font-bold text-sm'>{item.nombre}</p>
                    <div className='flex items-center justify-between'>
                      <p className='text-2xl font-bold'>${item.precio}.00</p>
                    </div>
                  </ProductCardInfo>
                }
                image={<ProductCardImage image={item.imagen} />}
                item={item}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  )
}

export default Shop
