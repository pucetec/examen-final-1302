// App.js
import React, { useState } from 'react';
import { ProductProvider } from './comon/ProductContext';
import ProductScreen from './comon/ProductScreen';
import ProductModal from './comon/ProductModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ProductProvider>
      <div>
        <ProductScreen />
        <ProductModal isOpen={isModalOpen} onClose={closeModal} />
        <button onClick={openModal}>Abrir Modal</button>
      </div>
    </ProductProvider>
  );
  
};

export default App;
