import React, {useState, useContext } from 'react';
import { PatientContext } from '../context/PatientContext';
import PatientModal from './PatientModal';

const PatientForm = () => {
  const { patient, setPatient } = useContext(PatientContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setPatient((prev) => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setPatient((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    setPatient((prev) => ({
      ...prev,
      enfermedades: prev.enfermedades.includes(name)
        ? prev.enfermedades.filter((enfermedad) => enfermedad !== name)
        : [...prev.enfermedades, name]
    }));
  };

  const handleViewButtonClick = () => {
    setIsModalOpen(true);
  };

  return (
    <form className="patient-form">
      <h2>Historia Clínica del Paciente (HCP)</h2>
      <input
        type="text"
        name="nombres"
        value={patient.nombres}
        onChange={handleChange}
        placeholder="Nombres"
      />
      <input
        type="text"
        name="apellidos"
        value={patient.apellidos}
        onChange={handleChange}
        placeholder="Apellidos"
      />
      <div className="gender-select">
        <label>
          <input
            type="radio"
            name="sexo"
            value="Femenino"
            checked={patient.sexo === 'Femenino'}
            onChange={handleChange}
          />
          Femenino
        </label>
        <label>
          <input
            type="radio"
            name="sexo"
            value="Masculino"
            checked={patient.sexo === 'Masculino'}
            onChange={handleChange}
          />
          Masculino
        </label>
      </div>
      <input
        type="number"
        name="edad"
        value={patient.edad}
        onChange={handleChange}
        placeholder="Edad"
      />
      <input
        type="number"
        name="telefono"
        value={patient.telefono}
        onChange={handleChange}
        placeholder="Teléfono"
      />
      <input
        type="text"
        name="foto"
        value={patient.foto}
        onChange={handleChange}
        placeholder="URL de la foto"
      />
      <div className="enfermedades-list">
        <label>
          <input
            type="checkbox"
            name="Diabetes"
            checked={patient.enfermedades.includes('Diabetes')}
            onChange={handleCheckboxChange}
          />
          Diabetes
        </label>
        <label>
          <input
            type="checkbox"
            name="Cirrosis"
            checked={patient.enfermedades.includes('Cirrosis')}
            onChange={handleCheckboxChange}
          />
          Cirrosis
        </label>
        <label>
          <input
            type="checkbox"
            name="VIH/Sida"
            checked={patient.enfermedades.includes('VIH/Sida')}
            onChange={handleCheckboxChange}
          />
          VIH/Sida
        </label>
        <label>
          <input
            type="checkbox"
            name="Hipertension"
            checked={patient.enfermedades.includes('Hipertension')}
            onChange={handleCheckboxChange}
          />
          Hipertension
        </label>
        <label>
          <input
            type="checkbox"
            name="Paraplejia"
            checked={patient.enfermedades.includes('Paraplejia')}
            onChange={handleCheckboxChange}
          />
          Paraplejia
        </label>
        <label>
          <input
            type="checkbox"
            name="Lupus"
            checked={patient.enfermedades.includes('Lupus')}
            onChange={handleCheckboxChange}
          />
          Lupus
        </label>
      </div>
      <select
        name="medicoTratante"
        value={patient.medicoTratante}
        onChange={handleChange}>

        <option value="">Seleccione un médico tratante</option>
        <option value="Dra. Arias">Dra. Arias</option>
        <option value="Dr. Guerrero">Dr. Guerrero</option>
        <option value="Dr. Joe Doe">Dr. Joe Doe</option>

      </select>
      <textarea
        name="notaConsulta"
        value={patient.notaConsulta}
        onChange={handleChange}
        placeholder="Nota de la consulta"
      />
      <button type="button" onClick={handleViewButtonClick}>Ver</button>
      {isModalOpen && <PatientModal closeModal={() => setIsModalOpen(false)} />}
    </form>
  );
};

export default PatientForm;
