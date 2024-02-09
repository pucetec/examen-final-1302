import { Radio as MaterialRadio } from "@mui/material";
export const Radio = ({ checked, color, onChange }) => {
  return (
    <MaterialRadio
      checked={checked}
      color={color}
      onChange={onChange}
    ></MaterialRadio>
  );
};
