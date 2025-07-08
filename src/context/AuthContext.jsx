import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  

  return (
    <CartContext.Provider
      value={{
        productos,
        cargando,
        cartItems,
        novedad,
        ofertas,
        promociones,
        handleAddToCart,
        handleIncrease,
        handleDecrease,
        handleRemoveItem,
        handleDeleteCart,
        handleBuy,
        compraFinalizada,
        isAutenticated,
        setIsAutenticated
      }}
    >
      {children}
    </CartContext.Provider>
  );
};