import React from "react";
import { Link } from "react-router-dom";

const CategoriasCarrusel = () => {
  return (
    <div className='max-w-[1200px] p-4 py-12 mx-auto'>
      <h4 className='md:text-3xl py-4 text-xl md:p-12'>Categorias</h4>
      <ul className='flex  font-bold gap-4 w-full overflow-scroll'>
        <li>
          <Link className='p-4 inline-block w-[200px] rounded-xl bg-yellow-400 border'>Pizza</Link>
        </li>

        <li>
          <Link className='p-4 inline-block w-[200px]  rounded-xl bg-yellow-400 border'>
            Hamburgesa
          </Link>
        </li>
        <li>
          <Link className='p-4 inline-block w-[200px] rounded-xl bg-yellow-400 border'>Pasta</Link>
        </li>
        <li>
          <Link className='p-4 inline-block w-[200px]  rounded-xl bg-yellow-400 border'>Pollo</Link>
        </li>
      </ul>
    </div>
  );
};

export default CategoriasCarrusel;
