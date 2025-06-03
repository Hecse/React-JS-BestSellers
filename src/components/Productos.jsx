import React from 'react'
import './styleProduct.css'
import { Link } from "react-router-dom";

const Productos = ({producto}) => {
  return (
    <>
    <h3 className="seccion"></h3>
        <section className="ofertas">
            <div className="tarjeta">

                <Link to={`/detalleProducto/${producto.id}`}>
                <img src={producto.imagen} alt="" />

                    <div className="descripcion">
                        <h4>{producto.titulo}</h4>
                        <p> ${new Intl.NumberFormat ().format (producto.precio)},00</p>
                    </div>
                </Link>                

                <button className="tarjeta-boton">Agregar al carrito <i className="fi fi-rr-shopping-cart"></i> </button>
            </div>
        </section>
    </>
  )
}

export default Productos