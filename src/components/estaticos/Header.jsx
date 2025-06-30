import { Link } from "react-router-dom";
import "./stylesEstatic.css";
import logo from '/logo.png'

const Header = ({ cartItems }) => {

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

        <div className="buscador">
            <form action="">
                <label htmlFor="buscar"></label>
                <input type="text" name="buscar" id="buscar" maxLength="400" placeholder="Buscar" required/>

                <button><i className="fi fi-rr-search"></i></button>
            </form>
        </div>

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
