import React from 'react';
import { TextField as MuiTextField } from '@mui/material';

const MyTextField = ({ ...props }) => {
  return <MuiTextField {...props} />;
};

export default MyTextField;
