import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

export default function CustomCheckBox({ label, checked, onChange }) {
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      inputProps={{ "aria-label": label }}
    />
  );
}
