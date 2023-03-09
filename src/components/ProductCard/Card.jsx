import { RiShoppingBasketLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import { useCarrito } from "../../hooks/useCarrito";
import { motion } from "framer-motion";

const Card = ({ data, image, item }) => {
  const { addItemToCart } = useCarrito();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duratio: 0.8 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className='relative border rounded-xl max-w-[600px]'
    >
      {/* LINK TO PRODUCT */}
      <Link to={`/comprar/${item.nombre}`}>
        <div className='card shadow-xl shadow-black/10 flex flex-col relative overflow-y-clip rounded-xl w-full min-w-[180px] md:min-w-[200px] max-w-[600px]  h-[300px]'>
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
        color={"gray"}
        className={
          "border absolute bottom-3 right-3 rounded-full h-8 w-8 bg-yellow-400 p-1 hover:shadow-md hover:scale-105 hover:cursor-pointer"
        }
      />
      {/* BASKET ICON */}
    </motion.div>
  );
};

export default Card;
