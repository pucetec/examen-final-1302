import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

export default function Modals({
  name,
  name2,
  name3,
  valor,
  valor2,
  valor3,
  descripcion,
  descripcion2,
  descripcion3,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Ver Producto Seleccionado</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Producto1:{name} <br />
            Producto2:{name2}
            <br />
            Producto3:{name3}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            descripcion 1: {descripcion}
            <br />
            descripcion 2: {descripcion2}
            <br />
            descripcion 3:{descripcion3}
            <br />
            valor 1: {"$" + valor} <br />
            valor 2: {"$" + valor2} <br />
            valor 3: {"$" + valor3}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
