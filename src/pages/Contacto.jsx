import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import "./pages.css";

const Contacto = () => {
  return (
    <>
      <Header />

      <main>
        <div className="caja-contacto">
          <div className="contacto">
            <div className="encabezado-contacto">
              <h3>Contacto</h3>
              <p>Envienos su consulta y le responderemos a la brevedad</p>
            </div>

            <form action="" method="post" className="formulario-contacto">
              <div className="etiqueta-contacto">
                <label for="nombre">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Su nombre"
                  maxlength="20"
                />
              </div>

              <div className="etiqueta-contacto">
                <label for="correo">Correo electrónico</label>
                <input
                  type="email"
                  name="correo"
                  id="correo"
                  placeholder="sucorreo@ejemplo.com"
                />
              </div>

              <div className="etiqueta-contacto">
                <label for="consulta">Consulta</label>
                <textarea
                  name="consulta"
                  id="consulta"
                  placeholder="Su consulta"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>

              <button
                type="submit"
                value="enviar"
                className="boton-contacto disabled"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contacto;
