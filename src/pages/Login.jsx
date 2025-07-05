import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import { useState } from "react";
import "./pages.css";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Login = () => {

  const {cartItems} = useContext(CartContext)

  const [pass, setPass] = useState("");
  const [correo, setCorreo] = useState("");
  const [showPass, setShowPass] = useState(false);

  function userLog(evento) {
  evento.preventDefault();
  setPass("");
  setCorreo("");
  }
  
  return (
    <>
      <Header cartItems={cartItems}/>

      <main>
        <div className="caja-login">
          <div className="login">
            <div className="encabezado-login">
              <h3>Iniciar sesión</h3>
              <p>Por favor ingrese los siguientes datos</p>
            </div>

            <form onSubmit={userLog} className="formulario-login">
              <div className="etiqueta-login">
                <label>Correo electrónico</label>
                <input
                  type="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  name="correo"
                  id="correo"
                  placeholder="sucorreo@ejemplo.com"
                />
              </div> 
              
              <div className="etiqueta-login">
                <label>Contraseña</label>
                <div className="input-password-container">
                  <input
                    type={showPass ? "text" : "password"}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    name="pass"
                    id="pass"
                    placeholder="Su Contraseña"
                    maxLength="20"
                  />

                  <button type="button" onClick={() => setShowPass(!showPass)} className="btn-ojo">
                    {showPass ? <i className="fi fi-rr-eye-crossed"></i> : <i className="fi fi-rs-eye"></i>}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                value="enviar"
                className="boton-login">
                Iniciar sesión 
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer/>
    </>    
  )
}

export default Login