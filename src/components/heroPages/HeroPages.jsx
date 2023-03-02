import { useLocation } from "react-router-dom";

const HeroPages = () => {
  const location = useLocation();

  return (
    <div className='h-60 bg-center bg-[url("https://images.pexels.com/photos/4669238/pexels-photo-4669238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]  flex items-center  justify-center  text-white text-6xl'>
      <h4 className='grid place-content-center capitalize bg-black/60 h-full w-full text-center'>
        {location.pathname.substring(1)}
      </h4>
    </div>
  );
};

export default HeroPages;
