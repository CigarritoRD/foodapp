import React from "react";

const ProductDescripcion = ({ descripcion }) => {
  return (
    <div className='p-4 border-b'>
      <p>{descripcion}</p>
    </div>
  );
};

export default ProductDescripcion;
