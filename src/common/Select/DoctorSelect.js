import React from "react";
import { useFormContext } from "../../context/Form";

const DoctorSelect = () => {
  const { doctor, handleNewDoctor } = useFormContext();
  return (
    <div>
      <label>Medico tratante </label>
      <select
        id="doctor"
        name="doctor"
        value={doctor}
        onChange={handleNewDoctor}
      >
        <option value="Joe">Joe Doe</option>
        <option value="Amor">Doctor Amor</option>
      </select>
    </div>
  );
};

export default DoctorSelect;
