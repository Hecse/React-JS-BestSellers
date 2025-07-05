import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [compraFinalizada, setCompraFinalizada] = useState(false);
  const [isAutenticated, setIsAutenticated] = useState(false);

  // agrega un producto al carrito
  const handleAddToCart = (producto) => {
    setCart((prevCart) => {
      // para ver si ya existe
      const existProduct = prevCart.find((item) => item.id === producto.id);
      setCompraFinalizada(false);

      if (existProduct) {
        // si ya existe, actualiza la cantidad
        return prevCart.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        // si no existe agrega 1 a la cantidad
        return [...prevCart, { ...producto, cantidad: 1 }];
      }
    });
  };

  // suma 1 a la cantidad de un producto
  const handleIncrease = (productoId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productoId ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  // resta 1 a la cantidad de un producto
  const handleDecrease = (productoId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productoId
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  // elimina un producto
  const handleRemoveItem = (productoId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productoId));
  };

  // elimina todos los productos del carrito
  const handleDeleteCart = () => {
    const confirmClear = window.confirm(
      "¿Estás seguro de que querés vaciar el carrito?"
    );
    if (confirmClear) {
      setCart([]);
      setCompraFinalizada(true);
    }
  };

  // comprar productos
  const handleBuy = () => {
    alert("¡Gracias por su compra! 🎉");
    setCart([]);
    setCompraFinalizada(true);
  };

  // trae los productos del JSON
  useEffect(() => {
    fetch("/data/productos.json")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setTimeout(() => {
          setProductos(datos);
          setCargando(false);
        }, 1000);
      })
      .catch((error) => {
        console.log("Error", error);
        setCargando(false);
        setError(true);
      });
  }, []);

  // filtro de productos
  const ofertas = productos.filter((libros) =>
    libros.categoria.includes("Oferta")
  );
  // console.log(ofertas)

  const novedad = productos.filter((libros) =>
    libros.categoria.includes("Novedad")
  );
  // console.log(novedad)

  const promociones = productos.filter((libros) =>
    libros.categoria.includes("Promocion")
  );
  // console.log(promociones)

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
        isAutenticated
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
