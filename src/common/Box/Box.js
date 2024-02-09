import React from "react";
import { Box as CustomBox } from "@mui/material/";

const Box = ({ children, className }) => {
  return <CustomBox className={className}>{children}</CustomBox>;
};
export default Box;
