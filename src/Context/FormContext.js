import React, { useState, useContext, createContext } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    productname: "",
    precioProducto: "",
    descripcion: "",
    sizes: [
      { subject: "", score: "" },
      { subject: "", score: "" },
      { subject: "", score: "" },
    ],
  });

  const updateFormData = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  return useContext(FormContext);
}
