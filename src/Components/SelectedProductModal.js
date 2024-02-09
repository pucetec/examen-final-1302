
import React from 'react';
import { Modal, Box, Button } from '@mui/material';
import { useProducts } from './ProductsContext';

const SelectedProductsModal = () => {
  const {
    isModalOpen,
    closeModal,
    selectedProductDetails,
  } = useProducts();

  const handleClose = () => {
    closeModal();
  };

  return (
    <Modal open={isModalOpen} onClose={handleClose}>
      <Box sx={{
        backgroundColor: '#fff',
        p: 3,
        borderRadius: '8px',
        width: '50%',
        height: '50%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
        <h2>Detalles de Productos Seleccionados</h2>
        {selectedProductDetails.map(({ productId, details }) => (
          <div key={productId}>
            <h3>{details.name}</h3>
            <p>Valor: ${details.value}</p>
            <p>Tamaño seleccionado: {details.selectedSize}</p>
            <img
              src={details.image}
              alt={details.name}
              style={{ maxWidth: '10%', height: 'auto' }}
            />
          </div>
        ))}
        <Button onClick={handleClose}>Cerrar</Button>
      </Box>
    </Modal>
  );
}

export default SelectedProductsModal;

