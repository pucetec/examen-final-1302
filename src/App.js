import React, { useState } from "react";
import Form from "./components/Form/Form";
import { Modal } from "@mui/material";
import Box from "./common/Box/Box";
import Button from "./common/Button/Button";

const styleModal = {
  position: "static",
  left: "0%",
  top: "0%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  backgroundColor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const App = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormData = (data) => {
    setFormData(data);
    handleOpen();
  };

  return (
    <div className="App">
      <div>
        <Form onFormSubmit={handleFormData} />{" "}
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={styleModal}>
          <h2>Detalles del Producto:</h2>
          <p>Nombre: {formData.nombre}</p> <p>Valor: {formData.valor}</p>
          <p>Tamaños Disponibles: {formData.tamaños.join(", ")}</p>
          <p>Descripción: {formData.descripcion}</p>
          <Button onClick={handleClose} value="Cerrar" />{" "}
        </Box>
      </Modal>
    </div>
  );
};

export default App;
