import { createContext, useContext, useState } from "react";

const productContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productValue, setProductValue] = useState("");
  const [productImage, setProductImage] = useState("");
  const [sizeLarge, setSizeLarge] = useState(false);
  const [sizeMedium, setSizeMedium] = useState(false);
  const [sizeSmall, setSizeSmall] = useState(false);
  const [productDescription, setProductDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <productContext.Provider
      value={{
        products,
        setProducts,
        productName,
        setProductName,
        productValue,
        setProductValue,
        productImage,
        setProductImage,
        productDescription,
        setProductDescription,
        sizeLarge,
        setSizeLarge,
        sizeMedium,
        setSizeMedium,
        sizeSmall,
        setSizeSmall,
        openModal,
        closeModal,
        isModalOpen,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export const useProductInfo = () => useContext(productContext);
