import React from "react";
import { Link } from "react-router-dom";
import "./stylesEstatic.css";
import logo from '/logo.png'

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
            <a href="/"><img src={logo} alt="logo"/></a>
            <a href="/"><h1>best<span>sellers</span></h1></a>
        </div>

        <div className="buscador">
            <form action="">
                <label htmlFor="buscar"></label>
                <input type="text" name="buscar" id="buscar" maxLength="400" placeholder="Buscar" required/>

                <button><i className="fi fi-rr-search"></i></button>
            </form>
        </div>

        <div className="carro">
          <p>0</p>
          
          <Link to="/Cart"><i className="fi fi-rr-shopping-cart"></i></Link>
        </div>
          
        <div>
          
          <Link to="/Login"><i className="fi fi-rs-user"></i></Link>
        </div>
      </header>

      <nav>
        <ul>
          <li><Link to="/" className="link">Inicio</Link></li>
          <li><Link to="/ofertas" className="link">Ofertas</Link></li>
          <li><Link to="/promociones" className="link">Promociones</Link></li>
          <li><Link to="/novedades" className="link">Novedades</Link></li>
          <li><Link to="/contacto" className="link">Contacto</Link></li>
        </ul>
      </nav>

      <div className="foto-libreria">
        <div className="hero">
            <p>"Vive como si fueras a morir mañana, aprende como si el mundo fuera a durar para siempre"
            </p>
        </div>
    </div>
    </>
  );
};

export default Header;
