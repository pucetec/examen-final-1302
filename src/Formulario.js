import React, { useState } from 'react';
import { Grid, Select, MenuItem, InputLabel, Box, Button, Modal, FormControl } from "@mui/material";
import { useDoctorContext } from './DoctorContext';


const Formulario = () => {
  const [medicoTratante, setMedicoTratante] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const { doctores } = useDoctorContext();

  const handleSubmit = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Grid container spacing={3}>
      {/* ... (resto del código) */}
      <Grid item xs={12} sm={12}>
        <Box>
          <FormControl fullWidth>
            <InputLabel>Medico tratante</InputLabel>
            <Select
              id="medicoTratante"
              value={medicoTratante}
              onChange={(e) => setMedicoTratante(e.target.value)}
            >
              <MenuItem value="">Selecciona un médico</MenuItem>
              {doctores.map(doctor => (
                <MenuItem key={doctor.id} value={doctor.nombre}>{doctor.nombre}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Ver
        </Button>
      </Grid>
      {/* ... (resto del código) */}
    </Grid>
  );
};

export default Formulario;
