import React from "react";
import Hero from "../../components/Hero";
import CarruselCards from "../../components/CarruselCards";
import CategoriasCarrusel from "../../components/CategoriasCarrusel";
import AboutUs from "../../components/AboutUs/AboutUs";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoriasCarrusel />
      <CarruselCards filtro={""} pre={"Mas "} titulo={"Populares"} />
      <CarruselCards filtro={"pizza"} pre={"Pizzas mas"} titulo={" Buscadas"} />
      <CarruselCards filtro={"hamburgesas"} pre={"Hamburgesas mas"} titulo={" Pedidas"} />
      <CarruselCards filtro={"pastas"} pre={"Pastas mas"} titulo={" Pedidas"} />
      <CarruselCards filtro={"pollo"} pre={"Pollo mas"} titulo={" Comprados"} />
      <div>
        <div className=' relative h-40 bg-slate-900 flex justify-center items-center bg-center bg-fixed  bg-[url("https://images.pexels.com/photos/270815/pexels-photo-270815.jpeg")] bg-opacity-10'>
          <h3 className=' text-4xl text-white text-center z-40'>Sobre Nosotros</h3>
          <div className='bg-black/40 h-full w-full absolute z-10'></div>
        </div>
        <AboutUs />
      </div>
    </>
  );
};

export default Home;
