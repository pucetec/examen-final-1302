import React from "react";
import { useFormContext } from "../../context/FormContext";
import { TextField } from "@mui/material";
const PriceInput = ({ placeholder }) => {
  const { price, handleNewPrice } = useFormContext();
  return (
    <div>
      <TextField
        placeholder={placeholder}
        value={price}
        onChange={handleNewPrice}
      ></TextField>
    </div>
  );
};

export default PriceInput;
