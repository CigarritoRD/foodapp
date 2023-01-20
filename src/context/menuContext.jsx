import { createContext, useEffect, useState } from "react";
import { data } from "../Data/data";

export const menuContext = createContext();

const menuContextProvider = ({ children }) => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    if (data) console.log(data);
    setDatos(data);
  }, []);
  return <menuContext.Provider value={data}>{children}</menuContext.Provider>;
};

export default menuContextProvider;
