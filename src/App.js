import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import MyAddProductFormMolecule from './components/Molecule/MyAddProductFormMolecule';
import MyProductListMolecule from './components/Molecule/MyProductListMolecule';

function App() {
  const [openAddProductForm, setOpenAddProductForm] = useState(false);
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setOpenAddProductForm(false);
  };

  return (
    <Container>
      <Typography variant="h1" align="center" gutterBottom>
        Productos
      </Typography>

      <Button onClick={() => setOpenAddProductForm(true)} variant="contained" color="primary">
        Agregar Producto
      </Button>

      <MyProductListMolecule products={products} />

      <MyAddProductFormMolecule open={openAddProductForm} onClose={() => setOpenAddProductForm(false)} onAddProduct={handleAddProduct} />
    </Container>
  );
}

export default App;
