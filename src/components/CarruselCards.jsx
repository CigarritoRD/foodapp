import Card from "./Card";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { useContext } from "react";
import { menuContext } from "../context/menuContext";

const CarruselCards = ({ filtro, pre, titulo }) => {
  const { datos } = useContext(menuContext);
  const comidasFiltradas = filtro ? datos.filter((comida) => comida.categoria === filtro) : datos;

  return (
    <div className='max-w-[1200px] mx-auto bg-slate-50'>
      <div className='flex px-5 items-center justify-between'>
        <h4 className='md:text-3xl  py-4 text-xl md:pb-8'>
          {pre}
          <span className='text-yellow-400 font-bold  border-b-4 border-gray-600'>{titulo}</span>
        </h4>
        <div className='flex gap-2 items-center justify-center'>
          <button className='p-2 border rounded-full text-dm'>
            <RiArrowDropLeftLine />
          </button>
          <button className='p-2 border rounded-full text-dm'>
            <RiArrowDropRightLine />
          </button>
        </div>
      </div>
      <div className='flex overflow-x-scroll py-8 px-4 gap-2 md:gap-4 scrollbar-hide'>
        {comidasFiltradas.map((comida) => {
          return <Card key={comida.imagen} data={comida} />;
        })}
      </div>
    </div>
  );
};

export default CarruselCards;
