import React from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';

const MyCheckbox = ({ label, ...props }) => {
  return <FormControlLabel control={<MuiCheckbox {...props} />} label={label} />;
};

export default MyCheckbox;
