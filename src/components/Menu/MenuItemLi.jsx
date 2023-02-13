import React from "react";
import { Link } from "react-router-dom";

const MenuItemLi = ({ item }) => {
  return (
    <li className=' border-y hover:bg-gray-500 duration-200'>
      <Link className='flex justify-between items-center p-1'>
        {item.descripcion}
        <span className='text-lg font-bold text-black'>{`$${item.precio}.00`}</span>
      </Link>
    </li>
  );
};

export default MenuItemLi;
