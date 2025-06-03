import React from "react";
import { useParams } from "react-router-dom";
import "./styleProduct.css";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";

const DetalleProducto = ({ productos }) => {
  const { id } = useParams();
  /* console.log (id) */

  /* console.log(productos); */

  const producto = productos.find((producto) => producto.id === Number(id));

  return (
    <>
      <Header />

      <div className="detalle">
        <section className="producto">
          <div className="producto-tarjeta">
            <div className="producto-imagen">
              <img src={producto.imagen} alt={producto.titulo} />

              <button
                data-id="${producto.id}"
                className="producto-boton-carrito"
              >
                Agregar al carrito <i className="fi fi-rr-shopping-cart"></i>{" "}
              </button>
            </div>

            <div className="producto-detalle">
              <small>{producto.categoria}</small>
              <div className="titulo">
                <h3>{producto.titulo}</h3>
                <h4>{producto.autor}</h4>
              </div>

              <div className="precio">
                <h4>$ {new Intl.NumberFormat().format(producto.precio)},00</h4>
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
