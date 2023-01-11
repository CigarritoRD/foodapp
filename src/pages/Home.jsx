import React from "react";
import Hero from "../components/Hero";
import CarruselCards from "../components/CarruselCards";
import NavBar from "../components/NavBar";
import CategoriasCarrusel from "../components/CategoriasCarrusel";

const Home = () => {
  return (
    <div className=''>
      <NavBar />
      <Hero />
      <CategoriasCarrusel />
      <CarruselCards pre={"Mas"} titulo={"Populares"} />
      <CarruselCards pre={"Pizzas mas"} titulo={" Buscadas"} />
      <CarruselCards pre={"Hamburgesas mas"} titulo={" Pedidas"} />
    </div>
  );
};

export default Home;
