// ProductModal.js
import React from 'react';
import { Modal, Paper, Typography } from '@mui/material';
import { useProductContext } from './ProductContext';

const ProductModal = ({ isOpen, onClose }) => {
  const { selectedProducts, products } = useProductContext();

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Paper>
        <Typography variant="h5">Productos Seleccionados</Typography>
        <ul>
          {selectedProducts.map((productId) => {
            const product = products.find((p) => p.id === productId);
            return (
              <li key={product.id}>
                {`Producto ${product.id}: ${product.name}`}
                <img src={product.imageUrl} alt={`Imagen de ${product.name}`} />
              </li>
            );
          })}
        </ul>
      </Paper>
    </Modal>
  );
};

export default ProductModal;
