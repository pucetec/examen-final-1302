import React from "react";
import { TextField as CusttomTextField } from "@mui/material/";

const TextField = ({ id, label, variant, size }) => {
  return (
    <CusttomTextField
      id={id}
      label={label}
      variant={variant}
      size={size}
    ></CusttomTextField>
  );
};
export default TextField;
