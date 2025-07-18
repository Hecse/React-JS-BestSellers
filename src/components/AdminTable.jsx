import React, { useEffect, useRef, useState } from "react";
import FormEditar from "../components/FormEditar";

const AdminTable = ({
  eliminarProducto,
  editarProducto,
  seleccionado,
  setSeleccionado,
  openEditar,
  setOpenEditar,
  productosFiltrados,
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

  const AccordionEditar = ({ isOpen, children }) => {
    const containerRef = useRef(null);
    const [shouldRender, setShouldRender] = useState(isOpen);
    const transitionDuration = 400;

    useEffect(() => {
      const el = containerRef.current;

      if (isOpen) {
        setShouldRender(true);
        requestAnimationFrame(() => {
          if (el) el.classList.add("show");
        });
      } else if (el) {
        // Animación de cierre
        el.classList.remove("show");

        // Fallback: desmonta tras la duración si no se dispara el evento
        const timeout = setTimeout(() => {
          setShouldRender(false);
        }, transitionDuration);

        const handleTransitionEnd = (e) => {
          if (e.propertyName === "max-height") {
            setShouldRender(false);
            clearTimeout(timeout);
            el.removeEventListener("transitionend", handleTransitionEnd);
          }
        };

        el.addEventListener("transitionend", handleTransitionEnd);
      }
    }, [isOpen]);

    if (!shouldRender) return null;

    return (
      <div ref={containerRef} className="accordion-container">
        {children}
      </div>
    );
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
          {productosFiltrados.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                <h3>No hay productos cargados</h3>
              </td>
            </tr>
          ) : (
            productosFiltrados.map((item) => (
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
                    <button className="button-agregar" onClick={() => handleEditarClick(item)}>
                      {openEditar && seleccionado?.id === item.id
                        ? "Cancelar"
                        : "Editar"}
                    </button>
                  </td>

                  <td>
                    <button className="button-agregar" onClick={() => eliminarProducto(item.id)}>
                      Borrar
                    </button>
                  </td>
                </tr>

                <tr>
                  <td colSpan="6">
                    <AccordionEditar
                      isOpen={openEditar && seleccionado?.id === item.id}
                    >
                      <FormEditar
                        onActualizar={editarProducto}
                        productoSeleccionado={seleccionado}
                      />
                    </AccordionEditar>
                  </td>
                </tr>
              </React.Fragment>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default AdminTable;
