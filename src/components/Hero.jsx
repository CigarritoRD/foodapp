import React from 'react'
import { motion } from 'framer-motion'
import hamberger from '../assets/hamberguer.png'
import background from '../assets/HeroBackground.jpg'
const Hero = () => {
  return (
    <div className=' mt-20 bg-black/90 relative md:h-[600px]'>
      <div className='w-full h-full md:h-[600px] absolute -z-10'>
        <img className='w-full h-full md:h-[600px] object-cover' src={background} alt='' />
      </div>
      <div className=' max-w-[1200px] md:h-[600px] place-content-center grid md:grid-cols-2 gap-4 md:p-4 pt-10  mx-auto'>
        <div className='px-4 lg:px-0 mx-auto flex flex-col gap-8 justify-center'>
          <motion.h4
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='font-bold text-white text-4xl md:text-6xl'
          >
            La Casa del mejor Sabor y
            <span className='text-yellow-400 font-bold border-b-4 border-gray-800'> Sazon</span>
          </motion.h4>
          <p className='text-slate-400 max-w-[600px] '>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, obcaecati cupiditate.
            Possimus
          </p>
          <div className='flex gap-4 sm:gap-4 flex-col md:flex-row justify-between md:justify-start'>
            <button className=' font-bold w-full hover:scale-105 duration-200 px-4 md:px-8 text-md py-4 bg-yellow-400 border border-yellow-400 rounded  text-black md:w-fit'>
              Ordena Ahora
            </button>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.25, opacity: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          className='flex relative items-center justify-center p-4 md:p-0 rounded-2xl overflow-hidden scale-125 '
        >
          <motion.img
            animate={{ x: [6, -5, 8, -7], y: [8, -8, 4, -6] }}
            transition={{
              delay: 1,
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            className='w-full h-full object-cover drop-shadow-[0_35px_35px_rgba(0,0,0,0.80)]'
            src={hamberger}
            alt=''
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
