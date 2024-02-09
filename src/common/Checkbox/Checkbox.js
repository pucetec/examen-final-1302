import { Checkbox as MaterialCheckbox } from "@mui/material";
export const Checkbox = ({ checked, color, onChange }) => {
  return (
    <MaterialCheckbox
      checked={checked}
      color={color}
      onChange={onChange}
    ></MaterialCheckbox>
  );
};
