import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Opcion = ({ lista, onSeleccionChange }) => {
  const handleSeleccionChange = (event) => {
    if (onSeleccionChange) {
      onSeleccionChange(event.target.value);
    }
  };

  return (
    <FormGroup>
      {lista.map((item) => (
        <FormControlLabel
          key={item.id}
          control={<Checkbox onChange={handleSeleccionChange} />}
          label={item.label}
        />
      ))}
    </FormGroup>
  );
}

export default Opcion;