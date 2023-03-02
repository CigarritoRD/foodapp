import { useContext } from "react";
import { HeroPages, MenuList } from "../../components";

import { menuContext } from "../../context/menuContext";

const Menu = () => {
  const { datos } = useContext(menuContext);
  const categoriasFiltradas = new Set(datos.map((item) => item.categoria));

  return (
    <>
      <HeroPages />
      <MenuList categoriasFiltradas={categoriasFiltradas} datos={datos} />;
    </>
  );
};

export default Menu;
