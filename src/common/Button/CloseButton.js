import React from "react";
import { useFormContext } from "../../context/FormContext";

const CloseButton = () => {
  const { setOpen } = useFormContext();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button onClick={handleClose}>Cerrar</button>
    </div>
  );
};

export default CloseButton;
