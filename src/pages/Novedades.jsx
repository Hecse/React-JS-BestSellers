import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import loading from "../assets/loading.gif";
import ProductList from "../components/ProductList";

const Novedades = ({ productos, cargando }) => {
  return (
    <>
      <Header />

      <main>
        <h3>Novedades</h3>
        {cargando ? (
          <img src={loading} />
        ) : (
          <ProductList productos={productos} />
        )}
      </main>

      <Footer />
    </>
  );
};

export default Novedades;
