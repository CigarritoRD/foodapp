import { RiCloseLine } from "react-icons/ri";
import { cantidadDeArticulos, showToast, sumaTotal } from "../../../helpers";
import { TOAST_OPTIONS } from "../../../helpers/toastOptions.helpers";
import { useCarrito } from "../../../hooks/useCarrito";

const CarritoModal = ({ showCarrito, cerrarCarrito }) => {
  const { carrito, addItemToCart, removeItemOfCart, resetCart } = useCarrito();

  return (
    <div
      className={`translate-x-[110%] duration-200 ${
        showCarrito && "translate-x-[0%]"
      } fixed bg-slate-50 z-[1000] shadow-black/70 shadow-2xl top-0 right-0 h-screen md:w-[450px] `}
    >
      <div
        onClick={() => cerrarCarrito(false)}
        className='hover:text-gray-600 duration-200 absolute h-8 w-8 flex items-center justify-center font-bold text-gray-400 top-4 left-4 cursor-pointer'
      >
        <RiCloseLine size={25} />
      </div>
      <h4 className='text-2xl font-bold text-center pt-10 pb-2'>
        Tu <span className='text-yellow-400'>Carrito</span>
      </h4>
      <h4 className='text-lg font-medium text-center p-2'>
        tienes <strong>{cantidadDeArticulos(carrito)}</strong> articulos por un total de:{" "}
        <span className='font-bold underline-offset-4 underline'>${sumaTotal(carrito)}.00</span>
      </h4>
      <div className='flex flex-col items-center justify-center gap-4 p-4'>
        <button className='w-full border rounded-full py-2 bg-yellow-400'>Pagar Articulos</button>
        <div className='flex md:flex-row flex-col  gap-4 w-full'>
          <button
            onClick={() => resetCart()}
            className='w-full border-2 border-yellow-400 rounded-full py-2'
          >
            Vaciar carrito
          </button>
          <button className='w-full border-2 border-yellow-400 rounded-full py-2'>
            Seguir Comprando
          </button>
        </div>
        <div className='flex flex-col  w-full gap-2'>
          {carrito.map((item) => (
            <div
              key={item.id}
              className='h-[110px] relative shadow-sm flex gap-1 border rounded-lg overflow-hidden'
            >
              <div
                onClick={() => removeItemOfCart(item, true)}
                className='text-gray-300 cursor-pointer duration-150 font-bold hover:text-red-400 text-sm absolute top-0 right-2'
              >
                <RiCloseLine size={25} />
              </div>
              <div className='w-[150px] h-full'>
                <img className='h-full w-[150px] object-cover' src={item.imagen} alt='' />
              </div>
              <div className=''>
                <div className='p-2'>
                  <p>{item.nombre}</p>
                  <p className='font-bold'>{item.precio}.00 $</p>
                </div>
                <div className='flex gap-4 items-center justify-between'>
                  <button
                    onClick={() => {
                      addItemToCart(item);
                      showToast(TOAST_OPTIONS.SUCCESS.TYPE, TOAST_OPTIONS.SUCCESS.TEXT);
                    }}
                    className='border rounded-full h-8 w-8 flex items-center justify-center  text-xl  p-2'
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      removeItemOfCart(item);
                      showToast(TOAST_OPTIONS.WARN.TYPE, TOAST_OPTIONS.WARN.TEXT);
                    }}
                    className='border rounded-full h-8 w-8  flex items-center justify-center  text-xl p-2'
                  >
                    -
                  </button>
                  {`Cantidad: ${item.cantidad}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarritoModal;
