import { RiShoppingBasketLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import { useCart } from '../../hooks/useCart'
import { motion } from 'framer-motion'

const Card = ({ data, image, item }) => {
  const { addItemToCart } = useCart()

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duratio: 0.8 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className='relative rounded-xl max-w-[600px] group'
    >
      {/* LINK TO PRODUCT */}
      <Link to={`/comprar/${item.nombre}`}>
        <div className='card shadow-md shadow-black/15 flex flex-col relative overflow-y-clip rounded-xl w-full min-w-[180px] md:min-w-[200px] max-w-[600px]  h-[300px]'>
          {image}
          <div className='flex-1'></div>
          {data}
        </div>
      </Link>
      {/* LINK TO PRODUCT */}

      {/* BASKET ICON */}
      <RiShoppingBasketLine
        onClick={() => addItemToCart(item)}
        size={20}
        color={'white'}
        className={
          'absolute bottom-3 right-3 rounded-full h-8 w-8 bg-yellow-400 p-1 hover:shadow-md duration-100 hover:scale-110 hover:cursor-pointer'
        }
      />
      {/* BASKET ICON */}
    </motion.div>
  )
}

export default Card
