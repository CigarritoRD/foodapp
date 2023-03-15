import { toast } from "react-toastify";

export const itemsFiltrados = (categoria, datos) =>
  datos.filter((item) => item.categoria === categoria);

export const sumaTotal = (carrito) => {
  const arrayDePrecios = carrito.map((articulo) => articulo.precio * articulo.cantidad);
  const total = carrito.length
    ? arrayDePrecios.reduce((total, precioActual) => total + precioActual)
    : 0;
  return total;
};

export const cantidadDeArticulos = (carrito) => {
  const total = carrito.length ? carrito.reduce((total, { cantidad }) => total + cantidad, 0) : 0;
  return total;
};

export const itemToRemove = (carrito, item, deleteAll) => {
  if (deleteAll) return carrito.filter((articulo) => articulo.id !== item.id);

  const itemToRemove =
    item.cantidad === 1
      ? carrito.filter((articulo) => articulo.id !== item.id)
      : carrito.map((articulo) => {
          if (articulo.id === item.id) return { ...articulo, cantidad: articulo.cantidad - 1 };
          return articulo;
        });
  return itemToRemove;
};

export const updateProducts = (carrito, item) => {
  const updatedProducts = carrito.map((articulo) => {
    if (articulo.id === item.id) {
      return { ...articulo, cantidad: articulo.cantidad ? (articulo.cantidad += 1) : 1 };
    } else {
      return articulo;
    }
  });

  return updatedProducts;
};

export const showToast = (type, textToShow) => {
  toast[type](textToShow, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
