import React from 'react'
import './styleProduct.css'

const Productos = ({producto}) => {
  return (
    <>
    <h3 className="seccion"></h3>
        <section className="ofertas">
            <div className="tarjeta">
                <a href="">
                    <img src={producto.imagen} alt="" />

                    <div className="descripcion">
                        <h4>{producto.titulo}</h4>
                        <p> ${new Intl.NumberFormat ().format (producto.precio)},00</p>
                    </div>
                </a>

                <button data-id="${producto.id}" className="tarjeta-boton">Agregar al carrito <i className="fi fi-rr-shopping-cart"></i> </button>
            </div>
        </section>
    </>
  )
}

export default Productos