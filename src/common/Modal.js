import React from "react";
import { Modal, Typography } from "@mui/material";

const CustomModal = ({ open, onClose, title, textFieldsData }) => {
  const handleCloseModal = () => {
    onClose();
  };

  const style = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 400,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div style={style}>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <div>
          {textFieldsData.map((data, index) => (
            <div key={index}>
              <Typography variant="body1" gutterBottom>
                {data.label}: {data.value}
              </Typography>
            </div>
          ))}
        </div>
        <button variant="outlined" onClick={handleCloseModal}>
          Cerrar Modal
        </button>
      </div>
    </Modal>
  );
};

export default CustomModal;
