import React from "react";
import { Button as MaterialButton } from "@mui/material";
export const Button = ({ content, color, variant, onClick }) => {
  return (
    <MaterialButton
      className="button"
      color={color}
      variant={variant}
      onClick={onClick}
    >
      {content}
    </MaterialButton>
  );
};
