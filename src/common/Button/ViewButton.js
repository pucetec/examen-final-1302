import React from "react";
import { useFormContext } from "../../context/Form";

const ViewButton = () => {
  const { handlePersonalInfo } = useFormContext();
  return (
    <div>
      <button onClick={handlePersonalInfo}>Ver</button>
    </div>
  );
};

export default ViewButton;
