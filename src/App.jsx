import { Route, Routes } from "react-router-dom";
import Busqueda from "./pages/Busqueda";
import Carrito from "./pages/Carrito";
import Categoria from "./pages/Categoria";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import Usuario from "./pages/Usuario";

function App() {
  return (
    <div className=' relative'>
      <div className='-z-10 absolute bg-[url(./assets/pattern.svg)] h-full opacity-5 w-full'></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/menu/:id' element={<Menu />} />
        <Route path='/categoria' element={<Categoria />} />
        <Route path='/busqueda' element={<Busqueda />} />
        <Route path='/usuario' element={<Usuario />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
