import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContexto } from "../../contexts/Contexto/Contexto";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalC() {
  const { open, handleClose, productoSeleccionado } = useContexto();

  if (!productoSeleccionado) {
    return null;
  }

  const { nombre, foto, precio, tamaniosDisponibles, descripcion } =
    productoSeleccionado;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {nombre}
          </Typography>
          <img
            src={foto}
            alt="Producto"
            style={{ maxWidth: "100%", marginTop: "8px" }}
          />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <strong>Precio:</strong> {precio}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <strong>Tamaños disponibles:</strong>{" "}
            {tamaniosDisponibles.join(", ")}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <strong>Descripción:</strong> {descripcion}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
