import React from "react";
import { data } from "../../Data/data";
import { OpcionFooter } from "./OpcionFooter";

export const OpcionesFooter = ({ title }) => {
  const { productos } = data;
  const categorias = new Set(productos.map(({ categoria }) => categoria));
  console.log(categorias);

  return (
    <div>
      <p className='text-xl font-bold capitalize py-2 border-y border-slate-700'>{title}</p>
      <ul>
        {categorias && [...categorias].map((item) => <OpcionFooter key={item} option={item} />)}
      </ul>
    </div>
  );
};
