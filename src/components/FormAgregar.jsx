import React, { useState } from "react";

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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregar(producto);
    setProducto({
      titulo: "",
      autor: "",
      precio: "",
      descripcion: "",
      categoria: [],
      imagen: "",
      stock: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="etiqueta-agregar">
        <label>Titulo:</label>
        <input
          type="text"
          value={producto.titulo}
          onChange={handleChange}
          required
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
          required
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
          required
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
          required
          name="descripcion"
          placeholder="Descripcion"
          cols="60"
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
        <input
          type="text"
          value={producto.categoria}
          onChange={handleChange}
          required
          name="categoria"
          placeholder="Categoria"
        />

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
          required
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
          required
          name="stock"
          placeholder="Stock"
        />

        {errors.stock && (
          <div className="error-agregar">
            <p>{errors.stock}</p>
          </div>
        )}
      </div>

      <button type="submit" value="enviar" className="">
        Agregar producto
      </button>
    </form>
  );
};

export default FormAgregar;
