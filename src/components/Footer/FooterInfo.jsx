import React from "react";
import { Logo } from "../Header";
import { OpcionesFooter } from "./OpcionesFooter";

const FooterInfo = () => {
  return (
    <>
      {" "}
      <div className='grid items-center md:grid-cols-3 gap-4 px-4 pt-10 max-w-[1200px] mx-auto'>
        <div className='bg-slate-900 p-4 rounded-lg'>
          <div className='p-4'>
            <Logo />
          </div>
          <p className='py-4'>
            <span className='font-bold'>Direccion:</span> calle X, #67 Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quod, hic?
          </p>
          <p>
            <span className='font-bold'>horario:</span> lun a Dom
          </p>
          <p> de 9:00am a 11:00pm </p>
        </div>
        <OpcionesFooter title={"Categorias"} />
        <OpcionesFooter title={"Siguenos"} />
      </div>
      <div className='p-6 mt-4 text-center bg-black text-slate-50'>
        <p>todos los derechos reservados Cigarrito RD</p>
      </div>
    </>
  );
};

export default FooterInfo;
