import { createContext, useContext, useEffect, useState } from "react";

const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const handleNewName = (e) => {
    setName(e.target.value);
  };

  const [price, setPrice] = useState("");
  const handleNewPrice = (e) => {
    setPrice(e.target.value);
  };

  const [image, setImage] = useState("");
  const handleNewImage = (e) => {
    setImage(e.target.value);
  };

  const [size, setSize] = useState([]);
  const handleNewSize = (e) => {
    setSize(e.target.value);
  };

  const [description, setDescription] = useState("");
  const handleNewDescription = (e) => {
    setDescription(e.target.value);
  };

  const [productInfo, setproductInfo] = useState([""]);
  const handleProductInfo = () => {
    if (name === "" || price === "")
      alert("Error Capa 8! Llene los cuadro por favor ");
    else setOpen(true);
  };

  const [open, setOpen] = useState(false);

  return (
    <FormContext.Provider
      value={{
        name,
        handleNewName,
        price,
        handleNewPrice,
        image,
        handleNewImage,
        size,
        handleNewSize,
        description,
        handleNewDescription,
        productInfo,
        handleProductInfo,
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
