import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import loading from "../assets/loading.gif";
import ProductList from "../components/ProductList";

const Ofertas = ({ productos, cargando, cartItems, handleAddToCart }) => {
  return (
    <>
      <Header cartItems={cartItems}/>

      <main>
        <h3>Libros en categoría: Ofertas</h3>
        {cargando ? (
          <img src={loading} />
        ) : (
          <ProductList productos={productos} addToCart={handleAddToCart}/>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Ofertas;
