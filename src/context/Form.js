import { createContext, useContext, useEffect, useState } from "react";

const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const handleNewName = (e) => {
    setName(e.target.value);
  };

  const [lastName, setLastName] = useState("");
  const handleNewLastName = (e) => {
    setLastName(e.target.value);
  };

  const [age, setAge] = useState("");
  const handleNewAge = (e) => {
    setAge(e.target.value);
  };

  const [phone, setPhone] = useState("");
  const handleNewPhone = (e) => {
    setPhone(e.target.value);
  };

  const [gender, setGender] = useState("");
  const handleNewGender = (e) => {
    setGender(e.target.value);
  };

  const [image, setImage] = useState("");
  const handleNewImage = (e) => {
    setImage(e.target.value);
  };

  const [disease, setDisease] = useState([]);
  const handleNewDisease = (e) => {
    setDisease(e.target.value);
  };

  const [doctor, setDoctor] = useState("");
  const handleNewDoctor = (e) => {
    setDoctor(e.target.value);
  };

  const [note, setNote] = useState("");
  const handleNewNote = (e) => {
    setNote(e.target.value);
  };
  const [personalInfo, setPersonalInfo] = useState([""]);
  const handlePersonalInfo = () => {
    if (name === "" || lastName === "" || age === "" || phone === "")
      alert("No haz escrito nada");
    else setOpen(true);
  };

  const [open, setOpen] = useState(false);

  return (
    <FormContext.Provider
      value={{
        name,
        handleNewName,
        lastName,
        handleNewLastName,
        age,
        handleNewAge,
        phone,
        handleNewPhone,
        gender,
        handleNewGender,
        image,
        handleNewImage,
        personalInfo,
        handlePersonalInfo,
        handleNewDisease,
        disease,
        handleNewDoctor,
        doctor,
        handleNewNote,
        note,
        open,
        setOpen,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;

export const useFormContext = () => useContext(FormContext);
