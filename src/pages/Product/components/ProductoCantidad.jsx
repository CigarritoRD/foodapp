import React from "react";

const ProductoCantidad = () => {
  return (
    <div className='flex  justify-between items-center gap-4'>
      cantidad
      <div className='flex items-center gap-4'>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
};

export default ProductoCantidad;
