import React from 'react';
import { Grid } from '@mui/material';

const MyProductListMolecule = ({ products, onProductClick }) => {
  return (
    <Grid container spacing={3}>
      {products.map((product, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <MyProductCard product={product} onClick={() => onProductClick(product)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MyProductListMolecule;
