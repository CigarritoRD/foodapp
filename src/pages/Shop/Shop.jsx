import React, { useState } from "react";

import {
  Card,
  HeroPages,
  ProductCardImage,
  ProductCardInfo,
  ProductStarsFiller,
} from "../../components";
import SearchForm from "../../components/SearchForm/SearchForm";
import { filteredItems } from "../../helpers/filtrarProductos";
import { useMenuContext } from "../../hooks/useMenuContext";
import { motion, AnimatePresence } from "framer-motion";

const Shop = () => {
  const { datos } = useMenuContext();
  const [term, setTerm] = useState("");

  const onChangeHandler = (e) => {
    setTerm(e.target.value);
    console.log(term);
  };

  return (
    <>
      <HeroPages />
      <div className='max-w-[1200px] mx-auto'>
        <SearchForm onChangeHandler={onChangeHandler} />
        <motion.div
          layout
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          }}
          className=' grid gap-2'
        >
          <AnimatePresence>
            {filteredItems(datos, term).map((item) => (
              <Card
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
  );
};

export default Shop;
