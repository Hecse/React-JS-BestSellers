import { useState } from "react";

const FormEditar = () => {
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

  return <div>FormEditar</div>;
};

export default FormEditar;
