import React from 'react'
import { Link } from 'react-router-dom'
import pollo from '../assets/categoria-imagenes/fried-chicken.svg'
import pizza from '../assets/categoria-imagenes/1502140004.svg'
import pastas from '../assets/categoria-imagenes/food-tasty-pasta.svg'
import hamburgesa from '../assets/categoria-imagenes/Gerald_G_Fast_Food_Lunch_Dinner_(FF_Menu)_6.svg'

const CategoriasCarrusel = () => {
  return (
    <div className='max-w-[1200px] p-4 py-2 mx-auto '>
      <h4 className='md:text-3xl py-8 text-xl'>
        <span className='text-4xl font-bold text-yellow-400'>C</span>ategorias
      </h4>
      <ul className='flex  font-bold gap-4 w-full overflow-x-scroll scrollbar-hide overflow-y-hidden  h-20 items-center'>
        <li>
          <Link
            to={'/comprar?categoria=pizza'}
            className='p-1 inline-flex items-center gap-4 w-[200px] rounded-xl  border-2  border-yellow-400 hover:translate-y-[-5px] bg-yellow-400 duration-200'
          >
            <img className='w-12  h-12' src={pizza} alt='' />
            Pizza
          </Link>
        </li>

        <li>
          <Link
            to={'/comprar?categoria=hamburgesas'}
            className='p-1 inline-flex items-center gap-4 w-[200px]  rounded-xl  border-2 border-yellow-400 hover:translate-y-[-5px] bg-yellow-400 duration-200'
          >
            <img className='w-12 h-12' src={hamburgesa} alt='' />
            Hamburgesas
          </Link>
        </li>
        <li>
          <Link
            to={'/comprar?categoria=pastas'}
            className='p-1 inline-flex items-center gap-4 w-[200px] rounded-xl  border-2 border-yellow-400 hover:translate-y-[-5px] bg-yellow-400 duration-200'
          >
            <img className='w-12  h-12' src={pastas} alt='' />
            Pasta
          </Link>
        </li>
        <li>
          <Link
            to={'/comprar?categoria=pollo'}
            className='p-1 inline-flex items-center gap-4 w-[200px]  rounded-xl  border-2 border-yellow-400 hover:translate-y-[-5px] bg-yellow-400 duration-200'
          >
            <img className='w-12  h-12' src={pollo} alt='' /> Pollo frito
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default CategoriasCarrusel
