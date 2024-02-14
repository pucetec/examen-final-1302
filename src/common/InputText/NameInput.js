import React from "react";
import { useFormContext } from "../../context/FormContext";
import { TextField } from "@mui/material";
const NameInput = ({ placeholder }) => {
  const { name, handleNewName } = useFormContext();
  return (
    <div>
      <TextField
        placeholder={placeholder}
        value={name}
        onChange={handleNewName}
      ></TextField>
    </div>
  );
};

export default NameInput;
