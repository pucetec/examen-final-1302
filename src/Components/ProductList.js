
import React, { useState } from 'react';
import { Checkbox, Button, Container, Grid, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { useProducts } from './ProductsContext';

const ProductList = () => {
  const { products, toggleProduct, selectedProducts,openModal} = useProducts();
  const [selectedSize, setSelectedSize] = useState({});

  const handleCheckboxChange = (productId) => {
    toggleProduct(productId);
  };

  const handleViewSelectedProducts = () => {

    console.log("Productos seleccionados:", selectedProducts);
    console.log("Tamaño seleccionado:", selectedSize);
  };

  const handleSizeChange = (productId, newSize) => {
    setSelectedSize((prevSelected) => ({
      ...prevSelected,
      [productId]: newSize,
    }));
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id}>
            <Checkbox
              checked={selectedProducts.includes(product.id)}
              onChange={() => handleCheckboxChange(product.id)}
            />
            <div>
              <h3>{product.name}</h3>
              <p>Nombre: {product.details.name}</p>
              <p>Valor: ${product.details.value}</p>    
              <img
                src={product.details.image}
                alt={product.details.name}
                style={{ maxWidth: '40%', height: 'auto' }}
              />
              <div>
                Tamaño disponible:
                <RadioGroup
                  row
                  value={selectedSize[product.id] || ''}
                  onChange={(e) => handleSizeChange(product.id, e.target.value)}
                >
                  {product.details.sizes.map((size) => (
                    <FormControlLabel
                      key={size}
                      value={size}
                      control={<Radio />}
                      label={size}
                    />
                  ))}
                </RadioGroup>
              </div>
              <p>Descripción: {product.details.description}</p>
            </div>
          </Grid>
        ))}
      </Grid>
      <Button onClick={openModal}>Ver productos seleccionados</Button>
    </Container>
  );
}

export default ProductList;
