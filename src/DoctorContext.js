import React, { createContext, useContext, useState } from 'react';

const DoctorContext = createContext();

export const useDoctorContext = () => {
  return useContext(DoctorContext);
};

export const DoctorProvider = ({ children }) => {
  const [doctores, setDoctores] = useState([
    { id: 1, nombre: 'Dr. Smith' },
    { id: 2, nombre: 'Dr. Johnson' },
    { id: 3, nombre: 'Dr. Williams' },
    { id: 4, nombre: 'Dr. Brown' },
    { id: 5, nombre: 'Dr. Davis' },
  ]);

  return (
    <DoctorContext.Provider value={{ doctores }}>
      {children}
    </DoctorContext.Provider>
  );
};
