import Card from "./ProductCard/Card";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { useContext } from "react";
import { menuContext } from "../context/menuContext";

import { ProductCardImage, ProductCardInfo, ProductStarsFiller } from "./ProductCard";
import { CategoriaInfo, CategoriaTitulo, CategoriaBotones, CategoriaBoton } from "./index";

const CarruselCards = ({ filtro, pre, titulo }) => {
  const { datos } = useContext(menuContext);

  const comidasFiltradas = filtro ? datos.filter((comida) => comida.categoria === filtro) : datos;

  return (
    <div className='max-w-[1200px] mx-auto bg-slate-50'>
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
          );
        })}
      </div>
    </div>
  );
};

export default CarruselCards;
