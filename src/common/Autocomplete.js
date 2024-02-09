import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={doctors}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Doctors" />}
    />
  );
}

const doctors = [
  { label: "Joyce Stevens" },
  { label: "Dr. Ryan P Mcconnell" },
  { label: "Terry Samuels MD" },
];
