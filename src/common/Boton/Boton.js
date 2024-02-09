import * as React from "react";
import Button from "@mui/material/Button";

const Boton = ({ variant, onClick, texto }) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {texto}
    </Button>
  );
};

export default Boton