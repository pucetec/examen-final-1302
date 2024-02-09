import React from "react";
import Button from '@mui/material/Button';
function Buttom({children, onClick}){
  return(<Button variant="outlined" onClick={onClick}>{children}</Button>);
}
export default Buttom;