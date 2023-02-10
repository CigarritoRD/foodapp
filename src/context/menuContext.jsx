import { createContext, useEffect, useState } from "react";
import { data } from "../Data/data";

export const menuContext = createContext();
console.log(data.productos);

const menuContextProvider = ({ children }) => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data.productos) {
      setDatos(data.productos);
      setLoading(false);
    } else {
      setDatos([]);
      setLoading(false);
    }
  }, [data]);

  return <menuContext.Provider value={{ datos, loading }}>{children}</menuContext.Provider>;
};

export default menuContextProvider;
