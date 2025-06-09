import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import { useState } from "react";
import "./pages.css";

const Contacto = () => {

const [nombre, setNombre] = useState("");

const [correo, setCorreo] = useState("");

const [consulta, setConsulta] = useState("");

function manejarEnvio(evento) {
  evento.preventDefault();
  alert(`Consulta enviada por: ${nombre}`);
  setNombre("");
  setCorreo("");
  setConsulta("");
}

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

            <form onSubmit={manejarEnvio} className="formulario-contacto">
              <div className="etiqueta-contacto">
                <label for="nombre">Nombre</label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
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
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  name="correo"
                  id="correo"
                  placeholder="sucorreo@ejemplo.com"
                />
              </div>

              <div className="etiqueta-contacto">
                <label for="consulta">Consulta</label>
                <textarea
                  name="consulta"
                  value={consulta}
                  onChange={(e) => setConsulta(e.target.value)}
                  id="consulta"
                  placeholder="Su consulta"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>

              <button
                type="submit"
                value="enviar"
                className="boton-contacto"
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
