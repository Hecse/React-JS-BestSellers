import Productos from "./Productos";
import "./styleProduct.css";

const ProductList = ({productosFiltrados}) => {

  return (
    <>
      <div className="ofertas">
        {productosFiltrados.map((producto) => (
          <Productos key={producto.id} producto={producto}  />
        ))}
      </div>
    </>
  );
};

export default ProductList;
