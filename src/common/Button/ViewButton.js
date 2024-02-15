import React from "react";
import { useFormContext } from "../../context/FormContext";
import { Button } from "@mui/material";
const ViewButton = () => {
  const { handleProductInfo } = useFormContext();
  return (
    <div>
      <Button variant={"contained"} onClick={handleProductInfo}>
        Ver Productos
      </Button>
    </div>
  );
};

export default ViewButton;
