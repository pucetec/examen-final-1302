import React from "react";
import { useFormContext } from "../../context/Form";

const LastNameInput = ({ placeholder }) => {
  const { lastName, handleNewLastName } = useFormContext();
  return (
    <div>
      <input
        placeholder={placeholder}
        value={lastName}
        onChange={handleNewLastName}
      ></input>
    </div>
  );
};

export default LastNameInput;
