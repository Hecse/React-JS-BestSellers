import "./adminPanel.css";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import AdminTable from "../components/AdminTable";
import FormularioAgregar from "../components/FormAgregar";

const AdminPanel = () => {
  const { productos } = useContext(CartContext);
  const [openAgregar, setOpenAgregar] = useState(false);

  const agregarProducto = async (producto) => {
    try {
      const respuesta = await fetch(
        "https://6873ad94c75558e27354e78e.mockapi.io/proyecto-ecommerce/articles",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(producto),
        }
      );
      if (!respuesta.ok) {
        throw new Error("Error al agregar el producto");
      }
      const data = await respuesta.json();
      alert("Producto agregado correctamente");
    } catch (error) {
      console.log(error.message);
    }
  };

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
            <div>
              <small>Salir</small> <i className="fi fi-rr-exit"></i>
            </div>
          </Link>
        </div>
      </header>

      <section className="admin-agregar">
        <div>
          <h3>Lista de productos</h3>
        </div>

        <div>
          <button onClick={() => setOpenAgregar(true)}>Agregar Producto</button>
        </div>
      </section>

      <section className="admin-agregar-form">
        <div className="admin-agregar-contenedor">
          {openAgregar && (<FormularioAgregar onAgregar={agregarProducto}/>)}
        </div>
        <button onClick={() => setOpenAgregar(false)}>Cancelar</button>
      </section>

      <section className="admin-tabla">
        <AdminTable productos={productos} />
      </section>
    </div>
  );
};

export default AdminPanel;