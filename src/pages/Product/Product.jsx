import { useParams } from "react-router-dom";
import { useSingleProduct } from "../../hooks/useSingleProduct";
import { Producto } from "./components";

const Product = () => {
  const { nombre } = useParams();
  const { singleProduct } = useSingleProduct(nombre);

  return (
    <div className='min-h-[600px] grid place-content-center bg-white'>
      {singleProduct.map((item) => (
        <Producto item={item} />
      ))}
    </div>
  );
};

export default Product;
