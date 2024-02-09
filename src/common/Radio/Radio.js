import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function CustomRadio() {
  return (
      <RadioGroup row>
        <FormControlLabel value="female" control={<Radio/>} label="Female" />
        <FormControlLabel value="male" control={<Radio/>} label="Male" />
      </RadioGroup>
  );
}
export default CustomRadio;