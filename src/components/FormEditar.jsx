import { useEffect, useState } from "react";

const FormEditar = ({ productoSeleccionado, onActualizar, setOpenEditar }) => {
  const [producto, setProducto] = useState(productoSeleccionado || {});

  useEffect(() => {
    if (productoSeleccionado) {
      setProducto({
        ...productoSeleccionado,
        categoria: productoSeleccionado.categoria || [],
      });
    }
  }, [productoSeleccionado]);

  /* useEffect(() => {
    setProducto(productoSeleccionado);
  }, [productoSeleccionado]); */

  const categoriasDisponibles = [
    "Americano",
    "Aventura",
    "Ciencia Ficcion",
    "Comic",
    "Contemporanea",
    "Ilustrado",
    "Independiente",
    "Infantil",
    "Juvenil",
    "Manga",
    "Misterio",
    "Novedad",
    "Novela",
    "Oferta",
    "Promocion",
    "Shonen",
  ];

  // guarda la información del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let nuevasCategorias = [...producto.categoria];
    if (checked) {
      nuevasCategorias.push(value);
    } else {
      nuevasCategorias = nuevasCategorias.filter((cat) => cat !== value);
    }
    setProducto({ ...producto, categoria: nuevasCategorias });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onActualizar(producto);
      }}
    >
      <div className="etiqueta-editar">
        <label>Titulo:</label>
        <input
          type="text"
          value={producto.titulo || ""}
          onChange={handleChange}
          // required
          name="titulo"
          placeholder="Titulo"
          maxLength="60"
        />
      </div>

      <div className="etiqueta-editar">
        <label>Autor:</label>
        <input
          type="text"
          value={producto.autor || ""}
          onChange={handleChange}
          // required
          name="autor"
          placeholder="Autor"
        />
      </div>

      <div className="etiqueta-editar">
        <label>Precio:</label>
        <input
          type="number"
          value={producto.precio || ""}
          onChange={handleChange}
          // required
          name="precio"
          placeholder="Precio"
        />
      </div>

      <div className="etiqueta-editar">
        <label>Descripcion:</label>
        <textarea
          value={producto.descripcion || ""}
          onChange={handleChange}
          // required
          name="descripcion"
          placeholder="Descripcion"
          cols="60"
          rows="5"
        />
      </div>

      <div className="etiqueta-editar">
        <label>Categoria:</label>
        <div className="etiqueta-agregar-check">
          {categoriasDisponibles.map((cat) => (
            <label key={cat}>
              <input
                type="checkbox"
                value={cat}
                checked={producto.categoria?.includes(cat)}
                onChange={handleCheckboxChange}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <div className="etiqueta-editar">
        <label>Imagen:</label>
        <input
          type="text"
          value={producto.imagen || ""}
          onChange={handleChange}
          //required
          name="imagen"
          placeholder="Link de la imagen"
        />
      </div>

      <div className="etiqueta-editar">
        <label>Stock:</label>
        <input
          type="number"
          value={producto.stock || ""}
          onChange={handleChange}
          //required
          name="stock"
          placeholder="Stock"
        />
      </div>

      <button type="submit" value="enviar">
        Actualizar producto
      </button>
    </form>
  );
};

export default FormEditar;
