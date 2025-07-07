import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import RutasProtegidas from "./auth/RutasProtegidas";
import AdminPanel from "./pages/AdminPanel";

function App() {  

  return (
    <Router>
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
        <Route path="/admin" element={<RutasProtegidas> <AdminPanel /> </RutasProtegidas>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
