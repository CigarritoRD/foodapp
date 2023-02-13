export const itemsFiltrados = (categoria, datos) =>
  datos.filter((item) => item.categoria === categoria);
