import { useEffect, useState } from "react";
import { useMenuContext } from "./useMenuContext";

export const useSingleProduct = (nombre) => {
  const { datos } = useMenuContext();
  const [singleProduct, setSingleProduct] = useState([]);
  const oneProduct = (datos, nombre) => {
    return datos.filter((item) => item.nombre === nombre);
  };
  useEffect(() => {
    setSingleProduct(oneProduct(datos, nombre));
  }, [datos]);

  return { singleProduct };
};
