import React, { useState } from 'react';
import { Grid, TextField, Checkbox, FormControl, FormControlLabel,Select, MenuItem, InputLabel, TextareaAutosize, Box, Button, Modal } from "@mui/material";


const Formulario = () => {
const [nombre, setNombre] = useState('');
const [apellidos, setApellidos] = useState('');
const [sexo, setSexo] = useState('');
const [edad, setEdad] = useState('');
const [telefono, setTelefono] = useState('');
const [foto, setFoto] = useState('');
const [enfermedades, setEnfermedades] = useState({
    diabetes: false,
    cirrosis: false,
    vih: false,
    hipertension: false,
    paraplejia: false,
    lupus: false,
  });
  const [medicoTratante, setMedicoTratante] = useState('');
  const [nota, setNota] = useState('');
  const [openModal, setOpenModal] = useState(false);


  const handleEnfermedadChange = (enfermedad) => {
    setEnfermedades({
      ...enfermedades,
      [enfermedad]: !enfermedades[enfermedad],
    });
  };


  const handleSubmit = () => {
    // Lógica del envío o procesamiento de datos
    setOpenModal(true);
  };


  const handleCloseModal = () => {
    setOpenModal(false);
  };


  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
        <TextField label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} fullWidth />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextField label="Apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} fullWidth />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextField label="Sexo" value={sexo} onChange={(e) => setSexo(e.target.value)} fullWidth />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextField label="Edad" value={edad} onChange={(e) => setEdad(e.target.value)} fullWidth />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextField label="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} fullWidth />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextField label="Foto (URL)" value={foto} onChange={(e) => setFoto(e.target.value)} fullWidth />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box>
          <FormControl fullWidth>
            <InputLabel>Enfermedades preexistentes</InputLabel>
            {Object.entries(enfermedades).map(([enfermedad, checked]) => (
              <FormControlLabel
                key={enfermedad}
                control={<Checkbox checked={checked} onChange={() => handleEnfermedadChange(enfermedad)} />}
                label={enfermedad}
                labelPlacement="end"
              />
            ))}
          </FormControl>
        </Box>
      </Grid>
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
              <MenuItem value="Dr. Smith">Dr. Smith</MenuItem>
              <MenuItem value="Dr. Johnson">Dr. Johnson</MenuItem>
              <MenuItem value="Dr. Williams">Dr. Williams</MenuItem>
              <MenuItem value="Dr. Brown">Dr. Brown</MenuItem>
              <MenuItem value="Dr. Davis">Dr. Davis</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12}>
        <InputLabel>NOTA</InputLabel>
        <TextareaAutosize value={nota} onChange={(e) => setNota(e.target.value)} fullWidth rowsMin={3} placeholder="Escribe un comentario..." />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Ver
        </Button>
      </Grid>


      {/* Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2>Información del formulario</h2>
          <p><strong>Nombre:</strong> {nombre}</p>
          <p><strong>Apellidos:</strong> {apellidos}</p>
          <p><strong>Sexo:</strong> {sexo}</p>
          <p><strong>Edad:</strong> {edad}</p>
          <p><strong>Teléfono:</strong> {telefono}</p>
          <p><strong>Foto (URL):</strong> {foto}</p>
          <p><strong>Enfermedades:</strong></p>
          <ul>
            {Object.entries(enfermedades).map(([enfermedad, checked]) => (
              <li key={enfermedad}>{enfermedad}: {checked ? 'Sí' : 'No'}</li>
            ))}
          </ul>
          <p><strong>Médico tratante:</strong> {medicoTratante}</p>
          <p><strong>Nota:</strong> {nota}</p>
          <Button variant="contained" color="primary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Box>
      </Modal>
    </Grid>
  );
};


export default Formulario;
