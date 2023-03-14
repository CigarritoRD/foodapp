import React from "react";

const ProductTitle = ({ titulo }) => {
  return (
    <h4 className='border-b capitalize text-2xl md:text-3xl p-4 md:pt-10 font-medium'>{titulo}</h4>
  );
};

export default ProductTitle;
