import React from "react";
import { useFormContext } from "../../context/FormContext";

const DescriptionTextArea = () => {
  const { handleNewDescription, description } = useFormContext();
  return (
    <div>
      <label>Descripción</label>
      <br />
      <textarea value={description} onChange={handleNewDescription}></textarea>
    </div>
  );
};

export default DescriptionTextArea;
