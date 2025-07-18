import { useState } from "react";

const FormAgregar = ({ onAgregar }) => {
  const [producto, setProducto] = useState({
    titulo: "",
    autor: "",
    precio: "",
    descripcion: "",
    categoria: [],
    imagen: "",
    stock: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

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

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      // agrega la categoría
      setProducto({ ...producto, categoria: [...producto.categoria, value] });
    } else {
      // saca la categoría
      setProducto({
        ...producto,
        categoria: producto.categoria.filter((cat) => cat !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarFormAgregar()) {
      return;
    }
    onAgregar(producto);

    setProducto({
      titulo: "",
      autor: "",
      precio: "",
      descripcion: "",
      categoria: "",
      imagen: "",
      stock: "",
    });
  };

  return (
    <section className="admin-agregar-form">
      <div className="admin-agregar-contenedor">
        <form onSubmit={handleSubmit}>
          <div className="etiqueta-agregar">
            <label>Titulo:</label>
            <input
              type="text"
              value={producto.titulo}
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

          <div className="etiqueta-agregar">
            <label>Autor:</label>
            <input
              type="text"
              value={producto.autor}
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

          <div className="etiqueta-agregar">
            <label>Precio:</label>
            <input
              type="number"
              value={producto.precio}
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

          <div className="etiqueta-agregar">
            <label>Descripcion:</label>
            <textarea
              value={producto.descripcion}
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

          <div className="etiqueta-agregar">
            <label>Categoria:</label>
            <div className="etiqueta-agregar-check">
              {categoriasDisponibles.map((cat) => (
                <label key={cat}>
                  <input
                    type="checkbox"
                    value={cat}
                    checked={producto.categoria.includes(cat)}
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

          <div className="etiqueta-agregar">
            <label>Imagen:</label>
            <input
              type="text"
              value={producto.imagen}
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

          <div className="etiqueta-agregar">
            <label>Stock:</label>
            <input
              type="number"
              value={producto.stock}
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
            Agregar producto
          </button>          
        </form>
      </div>
    </section>
  );
};

export default FormAgregar;