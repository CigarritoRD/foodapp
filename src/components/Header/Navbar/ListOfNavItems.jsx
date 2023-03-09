import React from "react";
import NavItem from "./NavItem";

const ListOfNavItems = () => {
  const menu = {
    inicio: { link: "home", literal: "inicio" },
    menu: { link: "menu", literal: "menu" },
    comprar: { link: "comprar", literal: "comprar" },
  };

  return (
    <ul className='md:flex hidden gap-4 text-md'>
      {Object.entries(menu).map(([key, { link, literal }]) => (
        <NavItem key={link} link={link}>
          {literal}
        </NavItem>
      ))}
    </ul>
  );
};

export default ListOfNavItems;
