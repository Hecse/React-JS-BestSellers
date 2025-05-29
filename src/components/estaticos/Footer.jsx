import React from "react";
import './stylesEstatic.css'

const footer = () => {
  return (
    <footer>
      <div>
        <h4>SOBRE NOSOTROS</h4>
        <p>BestSelllers.co, lanzado en 2015 por Cathryn Lavery, nació del deseo
          de ayudar a las personas a convertirse en la mejor versión de sí
          mismas. Cathryn, que luchaba contra el TDAH y había probado
          innumerables soluciones, quería crear una herramienta que realmente
          marcara la diferencia.</p>
          <br />
        <p>Esto llevó a la creación del diario original basado en objetivos, el
          SELF Journal, que se lanzó en Kickstarter. Recaudó 322 000 dólares en
          un mes y así nació Bestsellers.</p>
      </div>

      <div>
        <h4>NUESTRAS REDES SOCIALES</h4>
        <ul>
          <a href="#"><i className="fi fi-brands-instagram"></i></a>
            <a href="#"><i className="fi fi-brands-facebook"></i></a>
            <a href="#"><i className="fi fi-brands-twitter-alt"></i></a>
        </ul>
      </div>

      <div>
        <h4>MEDIOS DE PAGO</h4>
        <ul className='mediosDePago'>
          <li><i className="fi fi-brands-visa"></i></li>
          <li><i className="fi fi-brands-paypal"></i></li>
          <li><i className="fi fi-brands-american-express"></i></li>
        </ul>
                    
        <p>© 2024 Bestsellers SRL. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default footer;
