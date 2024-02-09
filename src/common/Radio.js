import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RowRadioButtonsGroup() {
  return (
    <FormControl className="align-left">
      <FormLabel id="demo-row-radio-buttons-group-label">Sexo</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="Femenino"
          control={<Radio />}
          label="Femenino"
        />
        <FormControlLabel
          value="Masculino"
          control={<Radio />}
          label="Masculino"
        />
      </RadioGroup>
    </FormControl>
  );
}
