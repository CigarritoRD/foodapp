import React from "react";
import Card from "./Card";

const MasVendidas = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <h4 className='text-3xl p-12'>
        Mas <span className='text-yellow-400 font-bold  border-b-4 border-gray-600'>Vendidos</span>{" "}
      </h4>
      <div className='flex overflow-x-scroll p-4 gap-4'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default MasVendidas;
