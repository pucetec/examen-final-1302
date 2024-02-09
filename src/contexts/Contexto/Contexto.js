import React, { createContext, useContext, useState } from "react";

const Contexto = createContext();

export const ContextoProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState();
  const [productosInfo, setProductosInfo] = useState({});

  const handleProductoChange = (producto) => {
    setProductoSeleccionado(producto);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleProductoInfoChange = (productoId, campo, valor) => {
    setProductosInfo((prevProductosInfo) => ({
      ...prevProductosInfo,
      [productoId]: {
        ...prevProductosInfo[productoId],
        [campo]: valor,
      },
    }));
  };

  return (
    <Contexto.Provider
      value={{
        open,
        handleClose,
        handleOpen,
        productoSeleccionado,
        setProductoSeleccionado,
        productosInfo,
        handleProductoInfoChange,
      }}
    >
      {children}
    </Contexto.Provider>
  );
};

export const useContexto = () => {
  return useContext(Contexto);
};