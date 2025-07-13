import './styleProduct.css'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Productos = ({producto}) => {

  const {handleAddToCart} = useContext(CartContext)
    
  return (
    <>    
        <section className="ofertas">
            <div className="tarjeta">

                <Link to={`/detalleProducto/${producto.id}`}>
                    <img src={producto.imagen} alt={producto.titulo} />

                    <div className="descripcion">
                        <h4>{producto.titulo}</h4>
                        <p> ${new Intl.NumberFormat ("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format (producto.precio)}</p>
                    </div>
                </Link>                

                <button className="tarjeta-boton" onClick={()=>handleAddToCart(producto)}>Agregar al carrito <i className="fi fi-rr-shopping-cart"></i> </button>
            </div>
        </section>
    </>
  )
}

export default Productos