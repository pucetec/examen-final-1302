
import React, { createContext, useContext, useState } from 'react';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products] = useState([
    { id: 1, name: 'Producto 1', details: { name: 'Camiseta de Futbol', value: 60.5, image: 'https://th.bing.com/th/id/R.f88c280172bc23169f8d88701f0052b2?rik=P%2bQ6NtLwBGZ1jQ&riu=http%3a%2f%2fk37.kn3.net%2ftaringa%2fE%2f3%2f8%2f3%2f0%2f1%2fArsenal_Gunner%2f978.jpg&ehk=rbs3iDykm3qnboRaT0uX9z2gBp4TlCk%2fj4OYhuE54rs%3d&risl=&pid=ImgRaw&r=0', sizes: ['Small', 'Mediano', 'Largo'], description: 'Camiseta de equipo de futbol europeo' } },
    { id: 2, name: 'Producto 2', details: { name: 'Balon de Futbol', value: 29.95, image: 'https://th.bing.com/th/id/OIP.V4KdZFsvagMGWfDOeK3dggHaGL?rs=1&pid=ImgDetMain', sizes: ['5', '4', '3'], description: 'Balon verde' } },
    { id: 3, name: 'Producto 3', details: { name: 'Lentes de natacion', value: 21.55, image: 'https://images-na.ssl-images-amazon.com/images/I/61T327U4CPS._AC_SX679_.jpg', sizes: ['Small', 'Mediano', 'Largo'], description: 'Lentes para ver debajo del agua' } },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductDetails, setSelectedProductDetails] = useState([]);

  const toggleProduct = (productId) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.includes(productId)) {
        return prevSelected.filter((id) => id !== productId);
      } else {
        return [...prevSelected, productId];
      }
    });
  };

  const openModal = () => {

    const details = selectedProducts.map((productId) => ({
      productId,
      details: products.find((product) => product.id === productId)?.details,
    }));

    setSelectedProductDetails(details);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProductDetails([]); 
    setIsModalOpen(false);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        selectedProducts,
        toggleProduct,
        openModal,
        closeModal,
        isModalOpen,
        selectedProductDetails,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductsContext);
};
