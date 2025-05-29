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

function App() {
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setTimeout(()=>{
          setProductos(datos)
          setCargando(false)
        },2000)
      })
      .catch(error =>{
        console.log('Error',error)
        setCargando(false)
        setError(true)
    })
  }, []);

  console.log(productos)

  const ofertas = productos.filter((libros) => libros.categoria.includes("Oferta"));
  console.log(ofertas)

  const novedad = productos.filter((libros) => libros.categoria.includes("Novedad"));
  console.log(novedad)

  const promociones = productos.filter((libros) => libros.categoria.includes("Promocion"));
  console.log(promociones)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home productos={productos} cargando={cargando} />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/novedades" element={<Novedades productos={novedad} cargando={cargando}/>} />
        <Route path="/ofertas" element={<Ofertas productos={ofertas} cargando={cargando}/>} />
        <Route path="/promociones" element={<Promociones productos={promociones} cargando={cargando}/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
