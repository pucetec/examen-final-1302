import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Enfermedades Preexistentes</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="Diabetes"
          control={<Checkbox />}
          label="Diabetes"
          labelPlacement="Diabetes"
        />
        <FormControlLabel
          value="Hipertensión"
          control={<Checkbox />}
          label="Hipertensión"
          labelPlacement="Hipertensión"
        />
      </FormGroup>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="Cirrosis"
          control={<Checkbox />}
          label="Cirrosis"
          labelPlacement="Cirrosis"
        />
        <FormControlLabel
          value="Paraplejia"
          control={<Checkbox />}
          label="Paraplejia"
          labelPlacement="Paraplejia"
        />
      </FormGroup>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="VIH/Sida"
          control={<Checkbox />}
          label="VIH/Sida"
          labelPlacement="VIH/Sida"
        />
        <FormControlLabel
          value="Lupus"
          control={<Checkbox />}
          label="Lupus"
          labelPlacement="Lupus"
        />
      </FormGroup>
    </FormControl>
  );
}
