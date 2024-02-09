import React from "react";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Checkboxes() {
  return (
      <Checkbox {...label} defaultChecked />
  );
}
export default Checkboxes;