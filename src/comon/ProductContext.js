// ProductContext.js
import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const products = [
    { id: 1, name: 'Producto 1', imageUrl: 'http://cdn.marketing4ecommerce.net/wp-content/uploads/2017/01/02204956/qu%C3%A9-es-una-imagen-vectorial.jpg' },
    { id: 2, name: 'Producto 2', imageUrl: 'url_de_la_imagen_2.jpg' },
    { id: 3, name: 'Producto 3', imageUrl: 'url_de_la_imagen_3.jpg' },
    // Agrega más productos según sea necesario
  ];

  const toggleProduct = (productId) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.includes(productId)) {
        return prevSelected.filter((id) => id !== productId);
      } else {
        return [...prevSelected, productId];
      }
    });
  };

  return (
    <ProductContext.Provider value={{ selectedProducts, toggleProduct, products }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider, useProductContext };
