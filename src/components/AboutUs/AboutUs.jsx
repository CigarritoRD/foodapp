import React from 'react'
import aboutUsImage from '../../assets/menu/Screenshot_1.jpg'
import aboutUsImage2 from '../../assets/menu/Screenshot_2.jpg'
import aboutUsImage3 from '../../assets/menu/Screenshot_3.jpg'
import { MdFastfood, MdOutlineDeliveryDining, MdRestaurantMenu } from 'react-icons/md'
import { FaPizzaSlice } from 'react-icons/fa'

const AboutUs = () => {
  return (
    <section className='bg-white'>
      <div className='py-12 px-4  grid md:grid-cols-2  mt-10 place-content-center gap-4 max-w-[1200px] mx-auto'>
        <div className='text-center md:text-left'>
          <h4 className='text-4xl border-b py-4'>Delicius FF</h4>
          <p className='py-5 text-lg leading-[40px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quisquam voluptas
            hic quod minus! Tempora maxime dolorem neque sit perferendis obcaecati accusamus
            voluptatem minus quod quisquam exercitationem ratione repellat velit sed, cum atque.
            Amet tempora distinctio ad, officiis laboriosam veritatis!
          </p>
        </div>
        <div className='grid grid-cols-2 gap-4  rounded overflow-hidden drop-shadow-md max-w-[400px] mx-auto'>
          <img className=' w-full h-[350px] object-cover' src={aboutUsImage} alt='' />
          <div className='flex flex-col gap-4 mt-4'>
            <img className=' w-full' src={aboutUsImage2} alt='' />
            <img className=' w-full h-[250px] object-cover' src={aboutUsImage3} alt='' />
          </div>
        </div>
      </div>
      <div className='relative min-h-[400px]'>
        {/* START BACKGROUND ABOUT US */}
        <div className='h-full w-full absolute bg-black/70 z-20'></div>
        <div className='w-full h-full absolute z-10'>
          <img
            className='w-full h-full object-cover object-center'
            src='https://www.qsrmagazine.com/sites/default/files/styles/slideshow_image/public/slideshow-images/slides/mcdonaldsglobal.jpg'
            alt=''
          />
        </div>
        {/* END BACKGROUND ABOUT US */}

        <div className=' absolute z-40 w-full bg-transparent grid grid-cols-2 md:grid-cols-4 place-items-center gap-4 h-full py-12 max-w-[1200px] mx-auto min-h-[350px]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <div className='flex gap-2 items-center justify-center flex-col p-2 '>
            <MdOutlineDeliveryDining size={80} color={'gold'} />
            <p className='text-xl font-bold text-white'>Fast Delivery</p>
          </div>
          <div className='flex gap-2 items-center justify-center flex-col p-2'>
            <MdFastfood size={80} color={'gold'} />
            <p className='text-xl font-bold text-white'>Fast Delivery</p>
          </div>
          <div className='flex gap-2 items-center justify-center flex-col p-2'>
            <MdRestaurantMenu size={80} color={'gold'} />
            <p className='text-xl font-bold text-white'>Fast Delivery</p>
          </div>
          <div className='flex gap-2 items-center justify-center flex-col p-2'>
            <FaPizzaSlice size={80} color={'gold'} />
            <p className='text-xl font-bold text-white'>Fast Delivery</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
