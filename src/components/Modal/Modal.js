import React, { useState } from "react";
import Modal from "react-modal";

const Producto = () => {
  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
          <label htmlFor="imagen">Imagen URL:</label>
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
        <button type="button" onClick={openModal}>
          Ver Detalles
        </button>
      </form>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Detalles del Producto</h2>
        <p>Nombre: {nombre}</p>
        <p>Valor: {valor}</p>
        <p>Imagen URL: {imagen}</p>
        <p>Descripción: {descripcion}</p>
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </div>
  );
};

export default Producto;
