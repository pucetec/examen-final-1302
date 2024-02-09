import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { useFormContext } from "../../Context/FormContext.js";

export function ProductForm({ product, idModal }) {
  const { formData, updateFormData } = useFormContext();

  const handleGradeChange = (e, index) => {
    const { name, value } = e.target;

    const updatedsizes = [...formData.sizes];
    updatedsizes[index] = {
      ...updatedsizes[index],
      [name]: value,
    };
    updateFormData("sizes", updatedsizes);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Tienda Deportiva
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" align="center" gutterBottom>
          {product}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Nombre del Producto"
          fullWidth
          name="productName"
          value={formData.productName}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Precio del Producto"
          fullWidth
          name="precioProducto"
          value={formData.precioProducto}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Descripcion del Producto"
          fullWidth
          name="productDetail"
          value={formData.productDetail}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Foto de Prenda de Vestir"
          fullWidth
          name="productPicture"
          value={formData.productPicture}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => console.log("Submit")}
        >
          Mostrar en modal
        </Button>
      </Grid>
    </Grid>
  );
}
