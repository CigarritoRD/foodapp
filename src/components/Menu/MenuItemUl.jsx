import React from "react";
import MenuItemLi from "./MenuItemLi";

const MenuItemUl = ({ items }) => {
  return (
    <ul className=' flex flex-col gap-2'>
      {items.map((item) => (
        <MenuItemLi key={item.nombre} item={item} />
      ))}
    </ul>
  );
};

export default MenuItemUl;
