import FormEditar from "../components/FormEditar";
import React from "react";

const AdminTable = ({
  productos,
  eliminarProducto,
  editarProducto,
  seleccionado,
  setSeleccionado,
  openEditar,
  setOpenEditar,
}) => {
  const handleEditarClick = (item) => {
    // Si ya está editando ese mismo, cancela
    if (openEditar && seleccionado?.id === item.id) {
      setOpenEditar(false);
      setSeleccionado(null);
    } else {
      setOpenEditar(true);
      setSeleccionado(item);
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>

        <tbody>
          {productos.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                <h3>No hay productos cargados</h3>
              </td>
            </tr>
          ) : (
            productos.map((item) => (
              <React.Fragment key={item.id}>
                <tr>
                  <td>
                    <img src={item.imagen} alt={item.titulo} />
                  </td>
                  <td>{item.titulo}</td>
                  <td>
                    ${" "}
                    {new Intl.NumberFormat("es-AR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(item.precio)}
                  </td>
                  <td>{item.stock}</td>

                  <td>
                    <button onClick={() => handleEditarClick(item)}>
                      {openEditar && seleccionado?.id === item.id
                        ? "Cancelar"
                        : "Editar"}
                    </button>
                  </td>

                  <td>
                    <button onClick={() => eliminarProducto(item.id)}>
                      Borrar
                    </button>
                  </td>
                </tr>

                {/* Renderiza el formulario debajo si este es el producto editado */}
                {openEditar && seleccionado?.id === item.id && (
                  <tr>
                    <td colSpan="6">
                      <FormEditar
                        onActualizar={editarProducto}
                        productoSeleccionado={seleccionado}
                        setOpenEditar={setOpenEditar}
                      />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default AdminTable;