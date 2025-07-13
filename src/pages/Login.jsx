import { useContext } from "react";
import "./pages.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {
    pass,
    setPass,
    email,
    setEmail,
    error,
    showPass,
    setShowPass,
    handleSubmit,
  } = useContext(AuthContext);

  return (
    <div className="caja-login">
      <div className="login">
        <div className="encabezado-login">
          <h3>Iniciar sesión</h3>
          <p>Por favor ingrese los siguientes datos</p>
        </div>

        <form onSubmit={handleSubmit} className="formulario-login">
          <div className="etiqueta-login">
            <label>Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
              placeholder="sucorreo@ejemplo.com"
            />

            {error.email && (
              <div className="error-login">
                <p>{error.email}</p>
              </div>
            )}
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

              {error.pass && (
                <div className="error-login">
                  <p>{error.pass}</p>
                </div>
              )}

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="btn-ojo"
              >
                {showPass ? (
                  <i className="fi fi-rr-eye-crossed"></i>
                ) : (
                  <i className="fi fi-rs-eye"></i>
                )}
              </button>
            </div>
          </div>

          <div>
            <button type="submit" value="enviar" className="boton-login">
              Iniciar sesión
            </button>
          </div>
        </form>

        <Link to="/" className="boton-volver-login">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Login;
