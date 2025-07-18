import { useEffect, useState } from "react";

const FormEditar = ({ productoSeleccionado, onActualizar }) => {
  const [producto, setProducto] = useState(productoSeleccionado || {});

  const [errors, setErrors] = useState({});
  
    const validarFormAgregar = () => {
      const erroresFormAgregar = {};
      if (!producto.titulo.trim()) {
        erroresFormAgregar.titulo = "El título es obligatorio";
      }
      if (!producto.autor.trim()) {
        erroresFormAgregar.autor = "El autor es obligatorio";
      }
      if (!producto.precio || producto.precio <= 0) {
        erroresFormAgregar.precio = "El precio debe ser mayor a 0";
      }
      if (!producto.descripcion.trim()) {
        erroresFormAgregar.descripcion = "La descripcion es obligatoria";
      }
      if (!producto.categoria || producto.categoria.length < 1) {
        erroresFormAgregar.categoria = "Debe seleccionar al menos una categoria";
      }
      if (!producto.imagen.trim()) {
        erroresFormAgregar.imagen = "La imagen es obligatoria";
      }
      if (!producto.stock || producto.stock <= 0) {
        erroresFormAgregar.stock = "El stock debe ser mayor a 0";
      }
      setErrors(erroresFormAgregar);
      return Object.keys(erroresFormAgregar).length === 0;
    };

  useEffect(() => {
    if (productoSeleccionado) {
      setProducto({
        ...productoSeleccionado,
        categoria: productoSeleccionado.categoria || [],
      });
    }
  }, [productoSeleccionado]);

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

  // guarda la información del value formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  // arma un array de categorias por producto
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarFormAgregar()) {
      return;
    }
    onActualizar(producto);    
  };

  return (
    <form
      className="editar"
      onSubmit={handleSubmit}
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

        {errors.titulo && (
          <div className="error-agregar">
            <p>{errors.titulo}</p>
          </div>
        )}
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

        {errors.autor && (
          <div className="error-agregar">
            <p>{errors.autor}</p>
          </div>
        )}
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

        {errors.precio && (
          <div className="error-agregar">
            <p>{errors.precio}</p>
          </div>
        )}
      </div>

      <div className="etiqueta-editar">
        <label>Descripcion:</label>
        <textarea
          value={producto.descripcion || ""}
          onChange={handleChange}
          // required
          name="descripcion"
          placeholder="Descripcion"
          /* cols="60" */
          rows="5"
        />

        {errors.descripcion && (
          <div className="error-agregar">
            <p>{errors.descripcion}</p>
          </div>
        )}
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

        {errors.categoria && (
          <div className="error-agregar">
            <p>{errors.categoria}</p>
          </div>
        )}
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

        {errors.imagen && (
          <div className="error-agregar">
            <p>{errors.imagen}</p>
          </div>
        )}
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

        {errors.stock && (
          <div className="error-agregar">
            <p>{errors.stock}</p>
          </div>
        )}
      </div>

      <button className="button-agregar" type="submit" value="enviar">
        Actualizar producto
      </button>
    </form>
  );
};

export default FormEditar;
