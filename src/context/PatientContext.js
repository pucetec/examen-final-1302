import React, { useState, createContext } from 'react';
export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [patient, setPatient] = useState({
    nombres: '',
    apellidos: '',
    sexo: '',
    edad: '',
    telefono: '',
    foto: '',
    enfermedades: [],
    medicoTratante: '',
    notaConsulta: ''
  });

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <PatientContext.Provider value={{ patient, setPatient, isModalOpen, closeModal }}>
      {children}
    </PatientContext.Provider>
  );
};
