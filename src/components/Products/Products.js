import { useState } from "react";
import { ProductsContextProvider } from "../../contexts/ProductContext";
const Products = () => {
  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");

  return (
    <div>
      <h2>Agregar Producto</h2>
      <form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="valor">Valor:</label>
          <input
            type="text"
            id="valor"
            value={valor}
            onChange={(event) => setValor(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="imagen">URL:</label>
          <input
            type="text"
            id="imagen"
            value={imagen}
            onChange={(event) => setImagen(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(event) => setDescripcion(event.target.value)}
          />
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

export default Products;
