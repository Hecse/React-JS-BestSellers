import "./adminPanel.css";
import logo from '/logo.png';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import AdminTable from "../components/AdminTable";

const AdminPanel = () => {

  const {productos} = useContext(CartContext)

  /* console.log(productos); */

  return (
    <div className="admin">
      <header>
        <div className="admin-logo">
          <img src={logo} alt="logo" />
          <h2>
            best<span>sellers</span>
          </h2>
        </div>

        <div>
          <h3>PANEL ADMINISTRATIVO</h3>
        </div>

        {/* <div>
          <p>Bienvenido "nombre"</p>
          <p>imagen</p>
        </div> */}

        <div className="admin-salir"> 
          <Link to="/" className="link">
          <div><small>Salir</small> <i className="fi fi-rr-exit"></i></div>                 
          </Link>          
        </div>
      </header>

      <section className="admin-agregar">
        <div><h3>Lista de productos</h3></div>
        <div><button>Agregar Producto</button></div>
      </section>

      <section className="admin-tabla">
        <AdminTable productos={productos}/>
      </section>
    </div>
  );
};

export default AdminPanel;