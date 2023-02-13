import React from "react";
import { useContext } from "react";
import { menuContext } from "../context/menuContext";
import MenuList from "../components/Menu/MenuList";

const Menu = () => {
  const { datos } = useContext(menuContext);

  const categoriasFiltradas = new Set(datos.map((item) => item.categoria));

  return (
    <>
      <div className='h-40 bg-black flex items-center  justify-center  text-white text-6xl'>
        <h4>Menu</h4>
      </div>
      <MenuList categoriasFiltradas={categoriasFiltradas} datos={datos} />
    </>
  );
};

export default Menu;
