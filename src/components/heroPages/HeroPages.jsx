import { useLocation } from 'react-router-dom'

const HeroPages = () => {
  const location = useLocation()

  return (
    <div className='mt-20 h-60 bg-center bg-[url("./../src/assets/backGroundHero.jpg")]  flex items-center  justify-center  text-white text-6xl'>
      <h4 className='grid place-content-center capitalize bg-black/60 h-full w-full text-center'>
        {location.pathname.substring(1)}
      </h4>
    </div>
  )
}

export default HeroPages
