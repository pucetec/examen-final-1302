import React from "react";
import { useFormContext } from "../../context/Form";

const AgeInput = ({ placeholder }) => {
  const { age, handleNewAge } = useFormContext();
  return (
    <div>
      <input
        placeholder={placeholder}
        value={age}
        onChange={handleNewAge}
      ></input>
    </div>
  );
};

export default AgeInput;
