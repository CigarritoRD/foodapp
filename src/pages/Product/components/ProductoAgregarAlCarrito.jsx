import { useCarrito } from "../../../hooks/useCarrito";
const ProductoAgregarAlCarrito = ({ item, children }) => {
  const { addItemToCart } = useCarrito();
  return (
    <button
      onClick={() => {
        addItemToCart(item);
      }}
      className='border rounded-full lg:px-6 md:px-4 py-2 bg-yellow-400'
    >
      {children}
    </button>
  );
};

export default ProductoAgregarAlCarrito;
