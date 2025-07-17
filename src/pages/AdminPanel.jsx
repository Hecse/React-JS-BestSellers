import "./adminPanel.css";
import logo from "/logo.png";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import AdminTable from "../components/AdminTable";
import FormAgregar from "../components/FormAgregar";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const { productos, setProductos, setIsAutenticated } =
    useContext(CartContext);
  const [openAgregar, setOpenAgregar] = useState(false);
  const [seleccionado, setSeleccionado] = useState(null);
  const [openEditar, setOpenEditar] = useState(false);
  const navigate = useNavigate();

  const cargarProductos = async () => {
    try {
      const res = await fetch(
        "https://6873ad94c75558e27354e78e.mockapi.io/proyecto-ecommerce/articles"
      );
      if (!res.ok) throw new Error("Error al obtener productos");
      const data = await res.json();
      setProductos(data);
    } catch (error) {
      console.log("Error al cargar los productos", error);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

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
      cargarProductos();
    } catch (error) {
      console.log(error.message);
    }
  };

  const eliminarProducto = async (id) => {
    const confirmar = window.confirm("Está seguro de eliminar el producto?");
    if (confirmar) {
      try {
        const respuesta = await fetch(
          `https://6873ad94c75558e27354e78e.mockapi.io/proyecto-ecommerce/articles/${id}`, //lleva comillas invertidas
          {
            method: "DELETE",
          }
        );
        if (!respuesta.ok) throw Error("Error al eliminar");
        alert("Producto eliminado correctamente");
        cargarProductos();
      } catch (error) {
        alert("Hubo un problema al eliminar el producto");
      }
    }
  };

  const editarProducto = async (producto) => {
    try {
      const respuesta = await fetch(
        `https://6873ad94c75558e27354e78e.mockapi.io/proyecto-ecommerce/articles/${producto.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(producto),
        }
      );
      if (!respuesta.ok) throw Error("Error al actulizar el producto");
      alert("Producto actualizado correctamente");
      setOpenEditar(false);
      setSeleccionado(null);
      cargarProductos();
    } catch (error) {
      alert("Hubo un problema al actualizar el producto");
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

        <div>
          <button onClick={() => setOpenAgregar(true)}>Agregar Producto</button>
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
        />
      </section>
    </div>
  );
};

export default AdminPanel;
