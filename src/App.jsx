import Layout from "./components/Layout/Layout";
import CarritoContextProvider from "./context/carritoContext";

function App() {
  return (
    <CarritoContextProvider>
      <Layout />
    </CarritoContextProvider>
  );
}
export default App;
