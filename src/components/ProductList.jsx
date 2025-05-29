import React from "react";
import Productos from "./Productos";
import "./styleProduct.css";

const ProductList = ({ productos }) => {
  return (
    <>
      <div className="ofertas">
        {productos.map((producto) => (
          <Productos key={producto.id} producto={producto} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
