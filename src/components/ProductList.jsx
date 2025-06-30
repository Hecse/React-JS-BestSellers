import React from "react";
import Productos from "./Productos";
import "./styleProduct.css";

const ProductList = ({ productos, addToCart }) => {
  return (
    <>
      <div className="ofertas">
        {productos.map((producto) => (
          <Productos key={producto.id} producto={producto} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
