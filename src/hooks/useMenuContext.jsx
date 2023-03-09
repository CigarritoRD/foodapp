import { useContext } from "react";
import { menuContext } from "../context/menuContext";

export const useMenuContext = () => {
  const { datos, loading } = useContext(menuContext);

  return { datos, loading };
};
