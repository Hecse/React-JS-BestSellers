import { useState } from "react";

const FormEditar = ({ productoSeleccionado, onActualizar}) => {

  const [producto, setProducto] = useState({productoSeleccionado});

  const [errors, setErrors] = useState({});

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

  return (
    <form >
      <div className="etiqueta-editar">
        <label>Titulo:</label>
        <input
          type="text"
          value={producto.titulo || ''}
          onChange={handleChange}
          // required
          name="titulo"
          placeholder="Titulo"
          maxLength="60"
        />

        {errors.titulo && (
          <div className="error-editar">
            <p>{errors.titulo}</p>
          </div>
        )}
      </div>

      <div className="etiqueta-editar">
        <label>Autor:</label>
        <input
          type="text"
          value={producto.autor  || ''}
          onChange={handleChange}
          // required
          name="autor"
          placeholder="Autor"
        />

        {errors.autor && (
          <div className="error-editar">
            <p>{errors.autor}</p>
          </div>
        )}
      </div>

      <div className="etiqueta-editar">
        <label>Precio:</label>
        <input
          type="number"
          value={producto.precio || ''}
          onChange={handleChange}
          // required
          name="precio"
          placeholder="Precio"
        />

        {errors.precio && (
          <div className="error-editar">
            <p>{errors.precio}</p>
          </div>
        )}
      </div>

      <div className="etiqueta-editar">
        <label>Descripcion:</label>
        <textarea
          value={producto.descripcion || ''}
          onChange={handleChange}
          // required
          name="descripcion"
          placeholder="Descripcion"
          cols="60"
          rows="5"
        />

        {errors.descripcion && (
          <div className="error-editar">
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
                checked={producto.categoria.includes(cat)}
                onChange={handleCheckboxChange}
              />
              {cat}
            </label>
          ))}
        </div>

        {errors.categoria && (
          <div className="error-editar">
            <p>{errors.categoria}</p>
          </div>
        )}
      </div>

      <div className="etiqueta-editar">
        <label>Imagen:</label>
        <input
          type="text"
          value={producto.imagen || ''}
          onChange={handleChange}
          //required
          name="imagen"
          placeholder="Link de la imagen"
        />

        {errors.imagen && (
          <div className="error-editar">
            <p>{errors.imagen}</p>
          </div>
        )}
      </div>

      <div className="etiqueta-editar">
        <label>Stock:</label>
        <input
          type="number"
          value={producto.stock || ''}
          onChange={handleChange}
          //required
          name="stock"
          placeholder="Stock"
        />

        {errors.stock && (
          <div className="error-editar">
            <p>{errors.stock}</p>
          </div>
        )}
      </div>

      <button type="submit" value="enviar">
        Agregar producto
      </button>

      <button >Cancelar</button>
    </form>
  );
};

export default FormEditar;
