import React from "react";
import { useFormContext } from "../../context/FormContext";
import { TextField } from "@mui/material";
const ImageInput = ({ placeholder }) => {
  const { image, handleNewImage } = useFormContext();
  return (
    <div>
      <TextField
        placeholder={placeholder}
        value={image}
        onChange={handleNewImage}
      ></TextField>
    </div>
  );
};

export default ImageInput;
