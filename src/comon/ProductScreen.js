// ProductScreen.js
import React from 'react';
import { Checkbox, FormControlLabel, Button } from '@mui/material'; // Importa desde @mui/material
import { useProductContext } from './ProductContext';

const ProductScreen = () => {
  const { toggleProduct } = useProductContext();

  const products = [
    { id: 1, name: 'Producto 1' },
    { id: 2, name: 'Producto 2' },
    { id: 3, name: 'Producto 3' },
  ];

  return (
    <div>
      {products.map((product) => (
        <FormControlLabel
          key={product.id}
          control={
            <Checkbox
              checked={false}
              onChange={() => toggleProduct(product.id)}
            />
          }
          label={product.name}
        />
      ))}
      <Button variant="contained" color="primary">
        
      </Button>
    </div>
  );
};

export default ProductScreen;
