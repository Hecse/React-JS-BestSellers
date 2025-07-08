import { useState, useContext } from "react";
import "./pages.css";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {setIsAutenticated} = useContext(CartContext);
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validateErrors = {};
    if (!email) validateErrors.email = "Email requerido";
    if (!pass) validateErrors.pass = "Contraseña requerida";
    if (Object.keys(validateErrors).length > 0) {
      setError(validateErrors);
      return;
    }

    try {
      const res = await fetch("data/users.json");
      const users = await res.json();

      /* console.log(users); */
      
      const foundUser = users.find((user) => user.email === email && user.pass === pass);

      if (!foundUser) {
        setError({ email: "credenciales invalidas" });
      } else {
        if (foundUser.rol === "admin") {
          setIsAutenticated(true);
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      console.error('Error fetching users:', err);
      setError({email: 'Algo salió mal. Por favor intentelo nuevamente'})
    }
  };

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

          <button type="submit" value="enviar" className="boton-login">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;