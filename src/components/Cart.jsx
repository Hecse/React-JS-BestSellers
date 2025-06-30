import "./styleProduct.css";
import Header from "./estaticos/Header";
import Footer from "./estaticos/Footer";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, handleIncrease, handleDecrease, handleRemoveItem, handleDeleteCart, handleBuy, compraFinalizada}) => {

  // console.log(cartItems);

  // calcula el total de la compra
  const total = cartItems.reduce(
  (acc, item) => acc + item.precio * item.cantidad, 0
  );

  return (
    <>
      <Header cartItems={cartItems}/>

      <main>
        <h3>Carrito de compras</h3>

        <div className="carrito-productos">
          {cartItems.length === 0 ? (<h3>Su carrito está vacio</h3>) : 
          (<>{cartItems.map((item, index) => 
            (<div className="carrito-producto" key={index}> 

              <Link to={`/detalleProducto/${item.id}`}>
                <img className="carrito-producto-imagen" src={item.imagen} alt={item.titulo} />                
              </Link>

              <div className="carrito-producto-titulo">
                <small>Titulo</small>
                <h4>{item.titulo}</h4> 
              </div>

              <div>
                <small>Cantidad</small>
    
                <div className="carrito-producto-cantidad">
                  <button className="carrito-producto-restar" onClick={() => handleDecrease(item.id)}><p> - </p></button>
                  <h4 className="cantidad"> {item.cantidad} </h4>
                  <button className="carrito-producto-sumar" onClick={() => handleIncrease(item.id)} disabled={item.cantidad >= item.stock}><p> + </p></button>
                </div>
               
                <div className="carrito-producto-stock">
                  <small>Stock disponible</small>
                  <p>({item.stock})</p>
                </div>
              </div>

              <div className="carrito-producto-precio">
                <small>Precio</small>
                <h4>$ {new Intl.NumberFormat("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(item.precio)}</h4>
             </div>

              <div className="carrito-producto-subtotal">
                <small>Subtotal</small>
                <h4 className="subtotal">$ {new Intl.NumberFormat("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(item.precio * item.cantidad)}</h4>
              </div>
    
              <button className="carrito-producto-eliminar" onClick={() => handleRemoveItem(item.id)}>
                <i className="fi fi-rr-trash"></i>
              </button>            
            </div>
            ))}
          </>)}        
        </div>

        <div className="contenedor-carrito-productos-acciones">
          {!compraFinalizada && (
          <div className="carrito-productos-acciones">
            <div>
              <button className="boton-vaciar-carrito" onClick={handleDeleteCart}>Vaciar carrito <i className="fi fi-rr-trash"></i></button>
            </div>

            <div className="carrito-productos-total">
              <div>
                <h4>Total</h4>
              </div>

              <div>
                <h4>${new Intl.NumberFormat().format(total)},00</h4>
              </div>

              <div>
                <button className="boton-productos-comprar" onClick={handleBuy}>Comprar <i className="fi fi-rr-shopping-cart"></i></button>
              </div>
            </div>
          </div>
          )}

          <Link to="/" className="boton-seguir-comprando">
            Ver mas productos
          </Link>                
       </div>

      </main>

      <Footer />
    </>
  );
};

export default Cart;