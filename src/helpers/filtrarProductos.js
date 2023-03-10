export const filteredItems = (datos, term, categoria = "") => {
  if (categoria) return datos.filter((item) => item.categoria === categoria);
  if (term) categoria = "";
  return datos.filter((item) => item.nombre.toLowerCase().includes(term.toLowerCase()) && item);
};
