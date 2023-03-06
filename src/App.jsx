import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout/Layout";
import CarritoContextProvider from "./context/carritoContext";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CarritoContextProvider>
      <Layout />
      <ToastContainer autoClose={3000} />
    </CarritoContextProvider>
  );
}
export default App;
