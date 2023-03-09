export const filteredItems = (datos, term) =>
  datos.filter((item) => item.nombre.toLowerCase().includes(term.toLowerCase()) && item);
