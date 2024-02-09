import React from "react";
import { useFormContext } from "../../context/Form";

const GenderRadio = () => {
  const { gender, handleNewGender } = useFormContext();
  return (
    <div>
      <label for="female">Femenino</label>
      <input
        type="radio"
        id="female"
        value="Femenino"
        checked={gender === "Femenino"}
        onChange={handleNewGender}
      ></input>
      <label for="male">Masculino</label>
      <input
        type="radio"
        id="male"
        value="Masculino"
        checked={gender === "Masculino"}
        onChange={handleNewGender}
      ></input>
    </div>
  );
};

export default GenderRadio;
