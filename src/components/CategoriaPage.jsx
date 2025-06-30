import { useParams } from "react-router-dom";
import "./styleProduct.css";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import { Link } from "react-router-dom";

const CategoriaPage = ({ productos, cargando, handleAddToCart, cartItems }) => {
  const { nombre } = useParams();

  const productosFiltrados = productos.filter((prod) =>
    prod.categoria.includes(nombre)
  );

  return (
    <>
      <Header cartItems={cartItems} />
      <main>
        <h3>Libros en categoría: {nombre}</h3>

        {cargando ? (
          <p>Cargando...</p>
        ) : productosFiltrados.length === 0 ? (
          <p>No hay productos en esta categoría</p>
        ) : (
          <div className="ofertas">
            {productosFiltrados.map((prod) => (
              <div key={prod.id} className="tarjeta">
                
                <Link to={`/detalleProducto/${prod.id}`}>
                  <img src={prod.imagen} alt={prod.titulo} />

                  <div className="descripcion">
                    <h4>{prod.titulo}</h4>
                    <p>$ {new Intl.NumberFormat("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(prod.precio)}</p>
                  </div>
                </Link>

                <button className="tarjeta-boton" onClick={() => handleAddToCart(prod)}>
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default CategoriaPage