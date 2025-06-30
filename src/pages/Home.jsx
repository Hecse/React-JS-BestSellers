import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import loading from "../assets/loading.gif";
import ProductList from "../components/ProductList";
import Hero from "../components/estaticos/Hero";

const Home = ({cargando, productos, handleAddToCart, cartItems}) => {
  // console.log(productos);
  // console.log(cartItems);  

  return (
    <>
      <Header cartItems={cartItems}/>
      <Hero/>

      <main>
        <h3>Lista de productos</h3>
        {cargando ? (<img src={loading} />) : (<ProductList productos={productos} addToCart={handleAddToCart}/>)}
      </main>
      
      <Footer/>
    </>
  );
};

export default Home;
