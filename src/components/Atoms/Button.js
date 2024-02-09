import React from 'react';
import { Button as MuiButton } from '@mui/material';

const MyButton = ({ children, ...props }) => {
  return <MuiButton {...props}>{children}</MuiButton>;
};

export default MyButton;
