import React, { useState } from 'react';
import { Typography, FormControlLabel } from '@mui/material';
import MyButton from './Button';
import MyModal from './Modal';
import MyTextField from './TextField'; 
import MyCheckbox from './Checkbox'; 

const MyAddProductFormMolecule = ({ open, onClose, onAddProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    sizes: [],
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSizeChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, sizes: [...formData.sizes, name] });
    } else {
      setFormData({ ...formData, sizes: formData.sizes.filter((size) => size !== name) });
    }
  };

  const handleSubmit = () => {
    onAddProduct(formData);
    setFormData({
      name: '',
      price: '',
      image: '',
      sizes: [],
      description: '',
    });
  };

  return (
    <MyModal open={open} onClose={onClose}>
      <Typography variant="h4">Agregar Producto</Typography>
      <MyTextField label="Nombre" name="name" value={formData.name} onChange={handleChange} />
      <MyTextField label="Precio" name="price" value={formData.price} onChange={handleChange} />
      <MyTextField label="Imagen" name="image" value={formData.image} onChange={handleChange} />
      <FormControlLabel control={<MyCheckbox checked={formData.sizes.includes('small')} onChange={handleSizeChange} name="small" />} label="Pequeño" />
      <FormControlLabel control={<MyCheckbox checked={formData.sizes.includes('medium')} onChange={handleSizeChange} name="medium" />} label="Mediano" />
      <FormControlLabel control={<MyCheckbox checked={formData.sizes.includes('large')} onChange={handleSizeChange} name="large" />} label="Grande" />
      <MyTextField label="Descripción" name="description" value={formData.description} onChange={handleChange} />
      <MyButton onClick={handleSubmit}>Agregar</MyButton>
    </MyModal>
  );
};

export default MyAddProductFormMolecule;
