import { createContext, useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const { productos, setProductos, setIsAutenticated } = useContext(CartContext);
  const [openAgregar, setOpenAgregar] = useState(false);
  const [seleccionado, setSeleccionado] = useState(null);
  const [openEditar, setOpenEditar] = useState(false);
  const [busqueda, setBusqueda] = useState("");

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

  const productosFiltrados = productos.filter((producto) => {
    const titulo = producto?.titulo?.toLowerCase() || "";
    const autor = producto?.autor?.toLowerCase() || "";
    const termino = busqueda.toLowerCase();

    return titulo.includes(termino) || autor.includes(termino);
  });

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
    <AdminContext.Provider
      value={{
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
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
