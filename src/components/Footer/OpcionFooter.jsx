import React from "react";
import { Link } from "react-router-dom";

export const OpcionFooter = ({ option }) => {
  return (
    <li>
      <Link className='hover:text-yellow-400 duration-200'>{option}</Link>
    </li>
  );
};
