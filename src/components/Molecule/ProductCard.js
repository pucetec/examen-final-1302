import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import MyButton from '../Atoms/Button';

const MyProductCard = ({ product, onClick }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Precio: {product.price}
        </Typography>
        <Typography variant="body2" component="p">
          Descripción: {product.description}
        </Typography>
      </CardContent>
      <MyButton onClick={onClick} color="primary">Ver Detalles</MyButton>
    </Card>
  );
};

export default MyProductCard;
