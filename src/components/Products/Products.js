const Products = () => {
  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleValorChange = (event) => {
    setValor(event.target.value);
  };

  const handleImagenChange = (event) => {
    setImagen(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

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
            onChange={handleNombreChange}
          />
        </div>
        <div>
          <label htmlFor="valor">Valor:</label>
          <input
            type="text"
            id="valor"
            value={valor}
            onChange={handleValorChange}
          />
        </div>
        <div>
          <label htmlFor="imagen">URL:</label>
          <input
            type="text"
            id="imagen"
            value={imagen}
            onChange={handleImagenChange}
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={handleDescripcionChange}
          />
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

export default Products;
