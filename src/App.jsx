import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Novedades from "./pages/Novedades";
import Ofertas from "./pages/Ofertas";
import Promociones from "./pages/Promociones";
import Login from "./pages/Login";
import Cart from "./components/Cart";
import NotFound from "./pages/NotFound";
import DetalleProducto from "./components/DetalleProducto";
import CategoriaPage from "./components/CategoriaPage";
import RutasProtegidas from "./rutas/RutasProtegidas";
import AdminPanel from "./pages/AdminPanel";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

function App() {  

  const {isAutenticated} = useContext(CartContext)

  return (    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/novedades" element={<Novedades />} />
      <Route path="/ofertas" element={<Ofertas />} />
      <Route path="/promociones" element={<Promociones />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/detalleProducto/:id" element={<DetalleProducto />} />
      <Route path="/categoria/:nombre" element={<CategoriaPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<RutasProtegidas isAutenticated={isAutenticated}> <AdminPanel /> </RutasProtegidas>} />
      <Route path="*" element={<NotFound />} />
    </Routes>    
  );
}

export default App;
