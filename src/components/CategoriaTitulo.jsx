import React from "react";

const CategoriaTitulo = ({ pre, titulo }) => {
  return (
    <h4 className='md:text-3xl  py-4 text-xl md:pb-8'>
      {pre}
      <span className='text-yellow-400 font-bold  border-b-4 border-gray-600'>{titulo}</span>
    </h4>
  );
};

export default CategoriaTitulo;
