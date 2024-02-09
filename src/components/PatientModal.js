import React, { useContext } from 'react';
import { PatientContext } from '../context/PatientContext';

const PatientModal = ({ closeModal }) => {
  const { patient } = useContext(PatientContext);

  return (
    <div className="modal-main">
      <div className="modal-container">
        <div className="modal-header">
          <h2>{`${patient.nombres} ${patient.apellidos}`} <span>({patient.edad} años / {patient.sexo})</span></h2>        
        </div>
        <div className="modal-body">
          <div className="modal-photo">
            <img className="patient-photo" src={patient.foto} alt={`${patient.nombres} ${patient.apellidos}`} />
          </div>
          <div className="modal-info">
            <h3>Información Básica</h3>
            <p>Nombres: {patient.nombres}</p>
            <p>Apellidos: {patient.apellidos}</p>
            <p>Edad: {patient.edad}</p>
            <p>Teléfono: {patient.telefono}</p>
            <h3>Enfermedades preexistentes</h3>
            <ul>
              {patient.enfermedades.map(enfermedad => <li key={enfermedad}>{enfermedad}</li>)}
            </ul>
            <h3>Actual Motivo de Consulta</h3>
            <p>{patient.notaConsulta}</p>
            <p>Médico tratante: {patient.medicoTratante}</p>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={closeModal}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default PatientModal;
