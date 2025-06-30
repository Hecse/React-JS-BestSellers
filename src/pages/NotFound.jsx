import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

const NotFound = () => {
  return (
    <div className="error">
      <div>
        <h1>Error 404</h1>
      </div>

      <div>
          <button className="boton-error"> <Link to="/">Volver al inicio</Link></button>
      </div>
        
    </div>
  );
};

export default NotFound;
