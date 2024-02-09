import { createContext, useContext } from "react";
import { useState } from "react";


const Contexto = createContext();

export const ProveedorDeContexto = ({ children }) => {

  const [nombreProducto1, setNombreProducto1] = useState("");
  const [valorProducto1, setValorProducto1] = useState("");
  const [imagenProducto1, setImagenProducto1] = useState("");
  const [sizeProducto1, setSizeProducto1] = useState("");
  const [descripcionProducto1, setDescripcionProducto1] = useState("");

  const [nombreProducto2, setNombreProducto2] = useState("");
  const [valorProducto2, setValorProducto2] = useState("");
  const [imagenProducto2, setImagenProducto2] = useState("");
  const [sizeProducto2, setSizeProducto2] = useState("");
  const [descripcionProducto2, setDescripcionProducto2] = useState("");

  const [nombreProducto3, setNombreProducto3] = useState("");
  const [valorProducto3, setValorProducto3] = useState("");
  const [imagenProducto3, setImagenProducto3] = useState("");
  const [sizeProducto3, setSizeProducto3] = useState("");
  const [descripcionProducto3, setDescripcionProducto3] = useState("");

  const [modal, setModal] = useState(false);




  return (
    <Contexto.Provider value={{ nombreProducto1, setNombreProducto1, valorProducto1, setValorProducto1,
      imagenProducto1, setImagenProducto1,
      sizeProducto1, setSizeProducto1, descripcionProducto1, setDescripcionProducto1,
      nombreProducto2, setNombreProducto2, valorProducto2, setValorProducto2,
      imagenProducto2, setImagenProducto2, sizeProducto2, setSizeProducto2,
      descripcionProducto2, setDescripcionProducto2,
      nombreProducto3, setNombreProducto3, valorProducto3,
      imagenProducto3, setImagenProducto3, setValorProducto3, sizeProducto3, setSizeProducto3,
      descripcionProducto3, setDescripcionProducto3,
      modal, setModal }}>
      { children }
    </Contexto.Provider>
  );
};

export const useContextoGeneral = () => useContext(Contexto);
