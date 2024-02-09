import React, { useState } from "react";
import { useProductos } from "./ProductosContext";

const AgregarProducto = ({ id, titulo }) => {
  const { agregarProducto } = useProductos();
  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState("");
  const [imagen, setImagen] = useState("");
  const [tamaño, setTamaño] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    agregarProducto({
      id,
      nombre,
      valor,
      imagen,
      tamaño,
      descripcion,
      isChecked: !isChecked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      agregarProducto({
        id,
        nombre,
        valor,
        imagen,
        tamaño,
        descripcion,
        isChecked,
      });

      setNombre("");
      setValor("");
      setImagen("");
      setTamaño("");
      setDescripcion("");
    }
  };

  const renderTamañoOptions = () => {
    switch (id) {
      case 1:
      case 3:
        return (
          <div style={{ marginTop: "10px" }}>
            <p>Tamaño:</p>
            <input
              type="checkbox"
              id="large"
              checked={tamaño === "large"}
              onChange={() => setTamaño("large")}
            />
            <label htmlFor="large">Large</label>
            <input
              type="checkbox"
              id="medium"
              checked={tamaño === "medium"}
              onChange={() => setTamaño("medium")}
            />
            <label htmlFor="medium">Medium</label>
            <input
              type="checkbox"
              id="small"
              checked={tamaño === "small"}
              onChange={() => setTamaño("small")}
            />
            <label htmlFor="small">Small</label>
          </div>
        );
      case 2:
        return (
          <div style={{ marginTop: "10px" }}>
            <p>Tamaño:</p>
            <input
              type="checkbox"
              id="5"
              checked={tamaño === "5"}
              onChange={() => setTamaño("5")}
            />
            <label htmlFor="5">5</label>
            <input
              type="checkbox"
              id="4"
              checked={tamaño === "4"}
              onChange={() => setTamaño("4")}
            />
            <label htmlFor="4">4</label>
            <input
              type="checkbox"
              id="3"
              checked={tamaño === "3"}
              onChange={() => setTamaño("3")}
            />
            <label htmlFor="3">3</label>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        margin: "auto",
        maxWidth: "300px",
        textAlign: "center",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h3
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {titulo}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </h3>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{ marginBottom: "10px", width: "100%" }}
        />
        <input
          type="text"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          style={{ marginBottom: "10px", width: "100%" }}
        />
        <input
          type="text"
          placeholder="Imagen URL"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          style={{ marginBottom: "10px", width: "100%" }}
        />
        {renderTamañoOptions()}
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          style={{ marginBottom: "10px", width: "100%" }}
        />
      </form>
    </div>
  );
};

export default AgregarProducto;
