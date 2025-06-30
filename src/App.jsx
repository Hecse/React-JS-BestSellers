import { useState, useEffect } from "react";
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

function App() {
  const [cartItems, setCart] = useState([]);
  //console.log(cartItems);
  const [productos, setProductos] = useState([]);
  // console.log(productos);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [compraFinalizada, setCompraFinalizada] = useState(false);
  
  // agrega un producto al carrito
  const handleAddToCart = (producto) => {
    setCart((prevCart) => {
      // para ver si ya existe
      const existProduct = prevCart.find((item) => item.id === producto.id);
      setCompraFinalizada(false);

      if (existProduct) {
        // si ya existe, actualiza la cantidad
        return prevCart.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        // si no existe agrega 1 a la cantidad
        return [...prevCart, { ...producto, cantidad: 1 }];
      }
    });
  };

  // suma 1 a la cantidad de un producto
  const handleIncrease = (productoId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productoId ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  // resta 1 a la cantidad de un producto
  const handleDecrease = (productoId) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
        item.id === productoId ? { ...item, cantidad: item.cantidad - 1 } : item
      )
      .filter((item) => item.cantidad > 0) 
    );
  };

  // elimina un producto
  const handleRemoveItem = (productoId) => {
  setCart((prevCart) => prevCart.filter((item) => item.id !== productoId));
  };

  // elimina todos los productos del carrito
  const handleDeleteCart = () => {
  const confirmClear = window.confirm("¿Estás seguro de que querés vaciar el carrito?");
  if (confirmClear) {
    setCart([]);
    setCompraFinalizada(true);
  }
  };

  // comprar productos
  const handleBuy = () => {
  alert("¡Gracias por su compra! 🎉");
  setCart([]);
  setCompraFinalizada(true);
  };

  // trae los productos del JSON
  useEffect(() => {
    fetch("/data/productos.json")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setTimeout(() => {
          setProductos(datos);
          setCargando(false);
        }, 1000);
      })
      .catch((error) => {
        console.log("Error", error);
        setCargando(false);
        setError(true);
      });
  }, []);

  // filtro de productos
  const ofertas = productos.filter((libros) =>
    libros.categoria.includes("Oferta")
  );
  // console.log(ofertas)

  const novedad = productos.filter((libros) =>
    libros.categoria.includes("Novedad")
  );
  // console.log(novedad) 

  const promociones = productos.filter((libros) =>
    libros.categoria.includes("Promocion")
  );
  // console.log(promociones) 

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cargando={cargando}
              productos={productos}
              handleAddToCart={handleAddToCart}
              cartItems={cartItems}
            />
          }
        />
        <Route 
        path="/contacto" 
        element={<Contacto cartItems={cartItems} />} />
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
              compraFinalizada={compraFinalizada}/>
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
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
