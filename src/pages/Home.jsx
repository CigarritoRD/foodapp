import React from "react";
import Hero from "../components/Hero";
import CarruselCards from "../components/CarruselCards";

import CategoriasCarrusel from "../components/CategoriasCarrusel";

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <CategoriasCarrusel />
      <CarruselCards filtro={""} pre={"Mas "} titulo={"Populares"} />
      <CarruselCards filtro={"pizza"} pre={"Pizzas mas"} titulo={" Buscadas"} />
      <CarruselCards filtro={"hamburgesas"} pre={"Hamburgesas mas"} titulo={" Pedidas"} />
    </div>
  );
};

export default Home;
