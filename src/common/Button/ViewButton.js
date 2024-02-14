import React from "react";
import { useFormContext } from "../../context/FormContext";

const ViewButton = () => {
  const { handleProductInfo } = useFormContext();
  return (
    <div>
      <button onClick={handleProductInfo}>Ver</button>
    </div>
  );
};

export default ViewButton;
