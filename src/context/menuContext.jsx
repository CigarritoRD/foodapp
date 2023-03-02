import { createContext, useEffect, useState } from "react";
import { data } from "../Data/data";

export const menuContext = createContext();

const menuContextProvider = ({ children }) => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(data.productos);
    setDatos(data.productos);
    console.log(datos);
  }, []);

  return <menuContext.Provider value={{ datos, loading }}>{children}</menuContext.Provider>;
};

export default menuContextProvider;
