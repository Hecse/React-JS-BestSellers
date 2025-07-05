import React from "react";
import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ isAutenticated, children }) => {
  if (!isAutenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default RutasProtegidas;