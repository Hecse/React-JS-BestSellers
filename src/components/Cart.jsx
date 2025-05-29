import React from 'react'
import './styleProduct.css'
import Header from "./estaticos/Header";
import Footer from "./estaticos/Footer";

const Cart = () => {
  return (
    <>
    <Header />

    <div className="carrito-vacio">
            <h3>Su carrito está vacio</h3>
        </div>

        <div className="carrito-comprado">
            {/* <!-- se completa con los datos del JS --> */}
        </div>

        <div className="carrito-productos">
            {/* <!-- se completa con los datos del localStorage --> */}
        </div>

        <div className="seguir-comprando">
            <a href="./index.html"><button class="boton-seguir-comprando">Ver mas productos</button></a>
        </div>

        <div className="contenedor-carrito-productos-acciones">
            <div className="carrito-productos-acciones">
                <div>
                    <button className="boton-vaciar-carrito">Vaciar carrito</button>
                </div>

                <div className="carrito-productos-total">
                    <div>
                        <h4>Total</h4>
                    </div>

                    <div>
                        <h4 id="total">$ 50</h4>
                    </div>

                    <div>
                        <button className="boton-productos-comprar">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
        
        <Footer />
        </>
  )
}

export default Cart