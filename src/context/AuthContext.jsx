import { createContext, useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const {setIsAutenticated} = useContext(CartContext);
  const [showPass, setShowPass] = useState(false);

  //guarda en el localStorage si el usuario está logueado
  useEffect(() => {
    const isAutenticated = localStorage.getItem("isAuth") === "true";
    if (isAutenticated) {
      setIsAutenticated(true);
      navigate("/admin");
    }
  }, []);

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

      const foundUser = users.find(
        (user) => user.email === email && user.pass === pass
      );

      if (!foundUser) {
        setError({ email: "credenciales invalidas" });        
      } else {
        if (foundUser.rol === "admin") {
          setIsAutenticated(true);
          localStorage.setItem('isAuth', true)
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      console.error("Error fetching users:", err);
      setError({ email: "Algo salió mal. Por favor intentelo nuevamente" });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        pass,
        setPass,
        email,
        setEmail,
        error,        
        showPass,
        setShowPass,
        handleSubmit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
