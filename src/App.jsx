import { useContext } from "react";
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
import { CartContext } from "./context/CartContext";

function App() {
  const {
    productos,
    cargando,
    novedad,
    ofertas,
    promociones,
    handleAddToCart,
    handleIncrease,
    handleDecrease,
    handleRemoveItem,
    handleDeleteCart,
    handleBuy,
    compraFinalizada,
    isAutenticated,
    cartItems,
  } = useContext(CartContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto cartItems={cartItems} />} />
        <Route
          path="/novedades"
          element={
            <Novedades
              cargando={cargando}
              productos={novedad}
              handleAddToCart={handleAddToCart}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path="/ofertas"
          element={
            <Ofertas
              cargando={cargando}
              productos={ofertas}
              handleAddToCart={handleAddToCart}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path="/promociones"
          element={
            <Promociones
              cargando={cargando}
              productos={promociones}
              handleAddToCart={handleAddToCart}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
              handleRemoveItem={handleRemoveItem}
              handleDeleteCart={handleDeleteCart}
              handleBuy={handleBuy}
              compraFinalizada={compraFinalizada}
            />
          }
        />
        <Route
          path="/detalleProducto/:id"
          element={
            <DetalleProducto
              cargando={cargando}
              productos={productos}
              addToCart={handleAddToCart}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path="/categoria/:nombre"
          element={
            <CategoriaPage
              productos={productos}
              cargando={cargando}
              handleAddToCart={handleAddToCart}
              cartItems={cartItems}
            />
          }
        />
        <Route path="/login" element={<Login cartItems={cartItems} />} />
        <Route
          path="/admin"
          element={
            <RutasProtegidas isAutenticated={isAutenticated}>
              <AdminPanel cartItems={cartItems} />
            </RutasProtegidas>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
