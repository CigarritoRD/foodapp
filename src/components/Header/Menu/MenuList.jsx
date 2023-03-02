import React from "react";
import { itemsFiltrados } from "../../../helpers";
import MenuItemUl from "./MenuItemUl";

const MenuList = ({ categoriasFiltradas, datos }) => {
  return (
    <>
      {Array.from(categoriasFiltradas).map((categoria) => {
        const { imagen, nombre } = itemsFiltrados(categoria, datos)[1];
        return (
          <div className='max-w-[1200px] px-4 mx-auto py-8'>
            <p className='text-2xl font-bold py-4 capitalize'>{categoria}</p>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
              <div className='rounded-lg  bg-black h-[120px] sm:min-h-[300px] '>
                <img
                  className='h-full w-full object-cover rounded-lg shadow-lg shadow-gray-200'
                  src={imagen}
                  alt={nombre}
                />
              </div>
              <div className=' col-span-2  flex flex-col justify-center'>
                <MenuItemUl categoria={categoria} items={itemsFiltrados(categoria, datos)} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MenuList;
