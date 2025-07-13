import React from "react";

const AdminTable = ({ productos }) => {
  console.log(productos);

  return (
    <table>
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Titulo</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Editar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        {productos.length === 0 ? (<h3>No hay productos para mostrar</h3>) : (
          <>
            {productos.map((item, index) => (
              <tr key={index}>
                <td><img src={item.imagen} alt={item.titulo}/></td>
                <td>{item.titulo}</td>
                <td>${" "}{new Intl.NumberFormat("es-AR", {minimumFractionDigits: 2, maximumFractionDigits: 2,}).format(item.precio)}</td>
                <td>{item.stock}</td>
                <td><button>editar</button></td>
                <td><button>borrar</button></td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
};

export default AdminTable;
