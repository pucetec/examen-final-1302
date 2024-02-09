import React from "react";
import { useFormContext } from "../../context/Form";

const DiaseCheckbox = () => {
  const { disease, handleNewDisease } = useFormContext();
  return (
    <div>
      <label for="diabetes">Diabetes</label>
      <input
        type="checkbox"
        id="diabetes"
        checked={disease === "Diabetes"}
        value="Diabetes"
        onChange={handleNewDisease}
      ></input>
      <label for="Hipertension">Hipertension</label>
      <input
        type="checkbox"
        id="Hipertension"
        checked={disease === "Hipertension"}
        value="Hipertension"
        onChange={handleNewDisease}
      ></input>
      <label for="cirrosis">Cirrosis</label>
      <input
        type="checkbox"
        id="cirrosis"
        checked={disease === "Cirrosis"}
        value="Cirrosis"
        onChange={handleNewDisease}
      ></input>
      <label for="paraplejia">Paraplejia</label>
      <input
        type="checkbox"
        id="paraplejia"
        checked={disease === "Paraplejia"}
        value="Paraplejia"
        onChange={handleNewDisease}
      ></input>
      <label for="sida">VIH/Sida</label>
      <input
        type="checkbox"
        id="sida"
        checked={disease === "Sida"}
        value="Sida"
        onChange={handleNewDisease}
      ></input>
      <label for="lupus">Lupus</label>
      <input
        type="checkbox"
        id="lupus"
        checked={disease === "Lupus"}
        value="Lupus"
        onChange={handleNewDisease}
      ></input>
    </div>
  );
};

export default DiaseCheckbox;
