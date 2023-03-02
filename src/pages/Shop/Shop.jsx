import React from "react";
import { Card, HeroPages } from "../../components";
import { useMenuContext } from "../../hooks/useMenuContext";

const Shop = () => {
  const { datos, loading } = useMenuContext();

  return (
    <>
      <HeroPages />
      <div className='max-w-[1200px] mx-auto'>
        <form action='' className='p-4'>
          <input
            type='text'
            name='searchbar'
            placeholder='Buscar'
            id=''
            className='border shadow-md w-full py-4 rounded-lg px-4 outline-none'
          />
        </form>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          }}
          className=' gap-2'
        >
          {datos.map((item) => (
            <Card data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
