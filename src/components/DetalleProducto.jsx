import React from "react";
import { useParams } from "react-router-dom";
import "./styleProduct.css";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import { Link } from "react-router-dom";

const DetalleProducto = ({ productos, cartItems, addToCart, handleAddToCart }) => {
  const { id } = useParams();
  // console.log (id);
  // console.log(productos); 

  const producto = productos.find((producto) => producto.id === Number(id));
  // console.log(producto);

  if (!producto) {
  return (
    <>
      <Header cartItems={cartItems} />
      <main>
        <h3>Producto no encontrado</h3>

        <div>
          <button className="boton-error"> <Link to="/">Volver al inicio</Link></button>
        </div>
      </main>
      <Footer />
    </>
  );
  }

  return (
    <>
      <Header cartItems={cartItems}/>

      <div className="detalle">
        <section className="producto">
          <div className="producto-tarjeta">
            <div className="producto-imagen">
              
              <img src={producto.imagen} alt={producto.titulo} />

              <button className="producto-boton-carrito" onClick={()=>addToCart(producto)}>
                Agregar al carrito <i className="fi fi-rr-shopping-cart"></i>
              </button>
            </div>

            <div className="producto-detalle">
              {/* <small>{producto.categoria}</small> */}
              <div className="producto-categorias">
                {producto.categoria.map((cat, index) => (
                  <Link key={index} to={`/categoria/${cat}`} className="link-categoria" >
                     {cat} <span>/ </span>
                  </Link>
                ))}
              </div>
              
              <div className="titulo">
                <h3>{producto.titulo}</h3>
                <h4>{producto.autor}</h4>
              </div>

              <div className="precio">
                <h4>$ {new Intl.NumberFormat("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(producto.precio)}</h4>
              </div>

              <div className="stock">
                <p>Stok: {producto.stock}</p>
              </div>

              <div className="medios-de-pago">
                <p>Medios de pago</p>
                <i className="fi fi-brands-visa"></i>
                <i className="fi fi-brands-paypal"></i>
                <i className="fi fi-brands-american-express"></i>
              </div>

              <div className="producto-descripcion">
                <p>{producto.descripcion}</p>
              </div>
            </div>
          </div>
        </section>

        <div>
          <h3>Reseñas de nuestros clientes</h3>
        </div>

        <section className="comentarios">
          <div className="comentario">
            <div>
              <h4>Fulano Detal</h4>
            </div>
            <div>
              <p>¡Éstos son excelentes para iniciar una conversación!</p>
            </div>

            <div className="linea">
              <hr />
            </div>

            <div>
              <h4>Mengano Detal</h4>
            </div>
            <div>
              <p>
                Para las personas que valoran las conversaciones profundas, una
                gran herramienta para crecer y fortalecer su relación
              </p>
            </div>

            <div className="linea">
              <hr />
            </div>

            <div>
              <h4>Fulano Detal</h4>
            </div>

            <div>
              <p>
                Buena experiencia con las preguntas... pero las cartas no
                estaban cortadas correctamente y por lo tanto eran difíciles de
                barajar
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default DetalleProducto;
