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
                {/* Agregar el resto de la información del producto */}
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
      <button onClick={handleMostrarProductos}>
        VER PRODUCTOS SELECCIONADOS
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
