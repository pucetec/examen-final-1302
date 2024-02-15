import React from "react";
import { useFormContext } from "../../context/FormContext";

const SizeCheckbox = () => {
  const { size, handleNewSize } = useFormContext();
  return (
    <div>
      <label for="large">Large</label>
      <input
        type="checkbox"
        id="large"
        checked={size === "Large"}
        value="Large"
        onChange={handleNewSize}
      ></input>
      <label for="Medium">Medium</label>
      <input
        type="checkbox"
        id="Medium"
        checked={size === "Medium"}
        value="Medium"
        onChange={handleNewSize}
      ></input>
      <label for="Small">Small</label>
      <input
        type="checkbox"
        id="Small"
        checked={size === "Small"}
        value="Small"
        onChange={handleNewSize}
      ></input>
    </div>
  );
};

export default SizeCheckbox;
