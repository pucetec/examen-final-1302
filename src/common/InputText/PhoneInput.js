import React from "react";
import { useFormContext } from "../../context/Form";

const PhoneInput = ({ placeholder }) => {
  const { phone, handleNewPhone } = useFormContext();
  return (
    <div>
      <input
        placeholder={placeholder}
        value={phone}
        onChange={handleNewPhone}
      ></input>
    </div>
  );
};

export default PhoneInput;
