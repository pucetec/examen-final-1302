// PantallaPrincipal.js
import React, { useState } from "react";
import AgregarProducto from "./AgregarProducto";
import { useProductos } from "./ProductosContext";

const PantallaPrincipal = () => {
  const { productos } = useProductos();
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleMostrarProductos = () => {
    const productosFiltrados = productos.filter(
      (producto) => producto.isChecked
    );
    setProductosSeleccionados(productosFiltrados);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const Modal = ({ isOpen, onClose, productosSeleccionados }) => {
    if (!isOpen) return null;

    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>Productos Seleccionados</h2>
          <ul>
            {productosSeleccionados.map((producto, index) => (
              <li key={index}>
                <div>Nombre: {producto.nombre}</div>
                <div>Valor: {producto.valor}</div>
                <div>Imagen: <img src={producto.imagen} alt={producto.nombre} /></div>
                <div>Tamaño Disponible: {producto.tamaño}</div>
                <div>Descripción: {producto.descripcion}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
        CMS Tienda Deportiva
      </h1>
      <AgregarProducto id={1} titulo="Producto 1" />
      <AgregarProducto id={2} titulo="Producto 2" />
      <AgregarProducto id={3} titulo="Producto 3" />
      <button
        onClick={handleMostrarProductos}
        style={{
          display: "block",
          margin: "0 auto",
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        VER PRODUCTO SELECCIONADO
      </button>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        productosSeleccionados={productosSeleccionados}
      />
    </div>
  );
};

export default PantallaPrincipal;
