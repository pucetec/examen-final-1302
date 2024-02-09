import React from "react";
import { useFormContext } from "../../context/Form";

const NameInput = ({ placeholder }) => {
  const { name, handleNewName } = useFormContext();
  return (
    <div>
      <input
        placeholder={placeholder}
        value={name}
        onChange={handleNewName}
      ></input>
    </div>
  );
};

export default NameInput;
