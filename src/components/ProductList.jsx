import Productos from "./Productos";
import "./styleProduct.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductList = ({productos}) => {

  /* const {} = useContext(CartContext) */

  return (
    <>
      <div className="ofertas">
        {productos.map((producto) => (
          <Productos key={producto.id} producto={producto}  />
        ))}
      </div>
    </>
  );
};

export default ProductList;
