import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import loading from "../assets/loading.gif";
import ProductList from "../components/ProductList";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Ofertas = () => {

  const {ofertas, cargando, handleAddToCart} = useContext(CartContext)

  return (
    <>
      <Header />

      <main>
        <h3>Libros en categoría: Ofertas</h3>
        {cargando ? (
          <img src={loading} />
        ) : (
          <ProductList productos={ofertas} addToCart={handleAddToCart}/>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Ofertas;
