import { Link } from "react-router-dom";
import "./stylesEstatic.css";
import logo from '/logo.png';
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const Header = () => {

  const {cartItems} = useContext(CartContext)  

  const totalItems = cartItems.reduce((acc, item) => acc + item.cantidad, 0);

  // console.log(countItems);
  // console.log(cartItems);   

  return (
    <>
      <header>        
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="logo"/>
            <h1>best<span>sellers</span></h1>          
          </div>
        </Link>       

        {/* <div className="buscador">
            <input
            type="text"
            placeholder="Buscar por título ó autor"
            value={busqueda}
            onChange={(e) => {setBusqueda(e.target.value);
            }}
          />
        </div> */}

        <div className="carro">
          <p>{totalItems}</p>          
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
    </>
  );
};

export default Header;