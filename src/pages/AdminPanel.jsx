import "./adminPanel.css";
import logo from "/logo.png";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import AdminTable from "../components/AdminTable";
import FormAgregar from "../components/FormAgregar";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const {
    productos,
    eliminarProducto,
    openAgregar,
    setOpenAgregar,
    agregarProducto,
    editarProducto,
    seleccionado,
    setSeleccionado,
    openEditar,
    setBusqueda,
    busqueda,
    setIsAutenticated,
    setOpenEditar,
    productosFiltrados
  } = useContext(AdminContext);

  const navigate = useNavigate();

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
          <button
            className="link"
            onClick={() => {
              setIsAutenticated(false);
              navigate("/");
              localStorage.removeItem("isAuth");
            }}
          >
            <div>
              <small>Salir </small>
              <i className="fi fi-rr-exit"></i>
            </div>
          </button>
        </div>
      </header>

      <section className="admin-agregar">
        <div>
          <h3>Lista de productos</h3>
        </div>

        <div className="buscador">
          <input
            type="text"
            placeholder="Buscar por título ó autor"
            value={busqueda}
            onChange={(e) => {
              setBusqueda(e.target.value);
            }}
          />
        </div>

        <div>
          <button onClick={() => setOpenAgregar(!openAgregar)}>
            {openAgregar ? "Cancelar" : "Agregar Producto"}
          </button>
        </div>
      </section>

      {openAgregar && (
        <FormAgregar
          onAgregar={agregarProducto}
          setOpenAgregar={setOpenAgregar}
        />
      )}

      <section className="admin-tabla">
        <AdminTable
          productos={productos}
          eliminarProducto={eliminarProducto}
          editarProducto={editarProducto}
          seleccionado={seleccionado}
          setSeleccionado={setSeleccionado}
          openEditar={openEditar}
          setOpenEditar={setOpenEditar}
          productosFiltrados={productosFiltrados}
        />
      </section>
    </div>
  );
};

export default AdminPanel;
