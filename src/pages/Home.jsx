import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import loading from "../assets/loading.gif";
import ProductList from "../components/ProductList";
import Hero from "../components/estaticos/Hero";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Home = () => {
  const { cargando, setBusqueda, busqueda, productosFiltrados } =
    useContext(CartContext);

  return (
    <>
      <Header />
      <Hero />
      <main>
        <h3>Lista de productos</h3>
        <div className="buscador">
          <input
            className="buscador-home"
            type="text"
            placeholder="Buscar por título ó autor"
            value={busqueda}
            onChange={(e) => {
              setBusqueda(e.target.value);
            }}
          />
        </div>
        {cargando ? (
          <img src={loading} />
        ) : (
          <ProductList productosFiltrados={productosFiltrados} />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Home;
