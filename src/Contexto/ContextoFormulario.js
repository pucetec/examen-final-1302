import React, { useState, useContext, createContext } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    sexo: "",
    edad: "",
    telefono: "",
    diabete: false,
    cirrosis: false,
    vih: false,
    hipertension: false,
    paraplejia: false,
    lupus: false,
    motivoConsulta: "",
    medicoTratante: "",
    foto: "",
    modalOpen: false,
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
