import { useParams } from "react-router-dom";
import { useSingleProduct } from "../../hooks/useSingleProduct";
import { useCarrito } from "../../hooks/useCarrito";
import CardProduct from "./components/Card";

const Product = () => {
  const { nombre } = useParams();
  const { singleProduct } = useSingleProduct(nombre);
  const { carrito, addItemToCart } = useCarrito();

  return (
    <div className='min-h-[600px] grid place-content-center'>
      {singleProduct.map((item) => (
        <div
          key={item.imagen}
          className='w-screen grid grid-cols-1 md:grid-cols-5 gap-4 p-4 max-w-[1200px]'
        >
          <div className='md:col-span-2'>
            <CardProduct product={item} />
          </div>

          <div className='border rounded-lg md:col-span-3 flex flex-col justify-between'>
            <h4 className='border-b capitalize text-2xl md:text-3xl p-4 md:pt-10 font-medium'>
              {item.nombre}
            </h4>
            <div className='md:text-5xl text-2xl font-bold p-4'>
              {item.precio} <span className='md:text-4xl text-xl'>$</span>
            </div>
            <div className='flex justify-between flex-col md:flex-row bg-gray-100 p-4 gap-2'>
              <button
                onClick={() => addItemToCart([...carrito, item])}
                className='border rounded-full lg:px-6 md:px-4 py-2 bg-yellow-400'
              >
                Agregar al carrito
              </button>
              <div className='flex  justify-between items-center gap-4'>
                cantidad
                <div className='flex items-center gap-4'>
                  <button className='bg-yellow-400 md:text-xl lg:text-3xl border rounded-full flex justify-center items-center h-10 w-10'>
                    +
                  </button>
                  1
                  <button className='border  rounded-full md:text-xl lg:text-3xl flex justify-center items-center h-10 w-10'>
                    -
                  </button>
                </div>
              </div>
              <button className='border rounded-full lg:px-6 md:px-4 py-2 bg-white'>pagar</button>
            </div>
            <p className='text-md bg-gray-50 font-bold p-4'>Descuento: -4.00$</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
