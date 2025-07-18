import { Link } from "react-router-dom";
import "./stylesEstatic.css";
import logo from "/logo.png";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.cantidad, 0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="header">
        <div>
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h1>
                best<span>sellers</span>
              </h1>
            </div>
          </Link>
        </div>

        <div className="header-icons">
          <div className="carro">
            <p>{totalItems}</p>
            <Link to="/Cart">
              <i className="fi fi-rr-shopping-cart"></i>
            </Link>
          </div>

          <div>
            <Link to="/Login">
              <i className="fi fi-rs-user"></i>
            </Link>
          </div>

          <button className="burger" onClick={toggleMenu}>
            <i className="fi fi-rr-menu-burger"></i>
          </button>
        </div>
      </header>

      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" className="link" onClick={toggleMenu}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/ofertas" className="link" onClick={toggleMenu}>
              Ofertas
            </Link>
          </li>
          <li>
            <Link to="/promociones" className="link" onClick={toggleMenu}>
              Promociones
            </Link>
          </li>
          <li>
            <Link to="/novedades" className="link" onClick={toggleMenu}>
              Novedades
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="link" onClick={toggleMenu}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
