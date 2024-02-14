import React from "react";
import { useFormContext } from "../../context/FormContext";

const PriceInput = ({ placeholder }) => {
  const { price, handleNewPrice } = useFormContext();
  return (
    <div>
      <input
        placeholder={placeholder}
        value={price}
        onChange={handleNewPrice}
      ></input>
    </div>
  );
};

export default PriceInput;
