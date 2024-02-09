import { createContext, useContext, useState } from "react";

const ProductoContext = createContext();

export const ProductoContextProvider = ({ children }) => {
  const [producto, setProducto] = useState("");

  return (
    <ProductoContext.Provider value={setProducto}>
      {children}
    </ProductoContext.Provider>
  );
};

export const useProductoContext = () => useContext(ProductoContext);
