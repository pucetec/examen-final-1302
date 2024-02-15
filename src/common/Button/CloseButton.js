import React from "react";
import { useFormContext } from "../../context/FormContext";
import { Button } from "@mui/material";

const CloseButton = () => {
  const { setOpen } = useFormContext();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant={"contained"} onClick={handleClose}>
        Cerrar
      </Button>
    </div>
  );
};

export default CloseButton;
