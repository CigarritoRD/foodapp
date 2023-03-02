import React from "react";
import { OpcionesFooter } from "./OpcionesFooter";

const Footer = () => {
  return (
    <footer className='border '>
      <div className='grid md:grid-cols-3 gap-4 px-4 pt-10 max-w-[1200px] mx-auto'>
        <div>
          <p className='text-xl font-bold capitalize py-2'>delicius FF</p>
          <p>
            <span className='font-bold'>direccion:</span> calle X, #67 Lorem ipsum, dolor sit amet
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
    </footer>
  );
};

export default Footer;
