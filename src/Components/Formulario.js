import React from 'react';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, TextField, Modal } from '@mui/material';
import { useFormContext } from '../Contexto/ContextoFormulario';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Formulario = () => {
  const { formData, setFormData } = useFormContext();
  const { nombres, apellidos, sexo, edad, telefono, diabete, cirrosis, vih, hipertension, paraplejia, lupus, motivoConsulta, medicoTratante, foto, modalOpen } = formData;

  const handleOpen = () => {
    setFormData(prevState => ({ ...prevState, modalOpen: true }));
  };

  const handleClose = () => {
    setFormData(prevState => ({ ...prevState, modalOpen: false }));
  };

  const handleChange = (key, value) => {
    setFormData(prevState => ({ ...prevState, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOpen();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', marginTop: '50px' }}>
      <form onSubmit={handleSubmit} style={{ width: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <h1>Historia Clínica del Paciente</h1>
        <TextField id="nombres" label="Nombres" value={nombres} onChange={(e) => handleChange("nombres", e.target.value)} style={{ width: '100%' }} />
        <TextField id="apellidos" label="Apellidos" value={apellidos} onChange={(e) => handleChange("apellidos", e.target.value)} style={{ width: '100%' }} />
        <FormControl style={{ width: '100%' }}>
          <InputLabel id="sexo-label">Sexo</InputLabel>
          <Select id="sexo" value={sexo} onChange={(e) => handleChange("sexo", e.target.value)} style={{ width: '100%' }}>
            <MenuItem value="masculino">Masculino</MenuItem>
            <MenuItem value="femenino">Femenino</MenuItem>
          </Select>
        </FormControl>
        <TextField id="edad" label="Edad" type="number" value={edad} onChange={(e) => handleChange("edad", e.target.value)} style={{ width: '100%' }} />
        <TextField id="telefono" label="Teléfono" value={telefono} onChange={(e) => handleChange("telefono", e.target.value)} style={{ width: '100%' }} />
        <p style={{ width: '100%', margin: 0, padding: 0 }}>Enfermedades preexistentes:</p>
        <FormGroup style={{ width: '100%' }}>
          <FormControlLabel control={<Checkbox checked={diabete} onChange={(e) => handleChange("diabete", e.target.checked)} />} label="Diabetes" />
          <FormControlLabel control={<Checkbox checked={cirrosis} onChange={(e) => handleChange("cirrosis", e.target.checked)} />} label="Cirrosis" />
          <FormControlLabel control={<Checkbox checked={vih} onChange={(e) => handleChange("vih", e.target.checked)} />} label="VIH/SIDA" />
          <FormControlLabel control={<Checkbox checked={hipertension} onChange={(e) => handleChange("hipertension", e.target.checked)} />} label="Hipertensión" />
          <FormControlLabel control={<Checkbox checked={paraplejia} onChange={(e) => handleChange("paraplejia", e.target.checked)} />} label="Paraplejia" />
          <FormControlLabel control={<Checkbox checked={lupus} onChange={(e) => handleChange("lupus", e.target.checked)} />} label="Lupus" />
        </FormGroup>
        <TextField id="foto" label="Link de la Foto" value={foto} onChange={(e) => handleChange("foto", e.target.value)} style={{ width: '100%' }} />
        <FormControl style={{ width: '100%' }}>
          <InputLabel id="medico-tratante-label">Médico Tratante</InputLabel>
          <Select id="medico-tratante" value={medicoTratante} onChange={(e) => handleChange("medicoTratante", e.target.value)} style={{ width: '100%' }}>
            <MenuItem value="Joe Doe">Joe Doe</MenuItem>
            <MenuItem value="Juana Maria">Juana Maria</MenuItem>
          </Select>
        </FormControl>
        <TextField id="motivo-consulta" label="Actual Motivo de Consulta" value={motivoConsulta} onChange={(e) => handleChange("motivoConsulta", e.target.value)} multiline rows={4} style={{ width: '100%' }} />
        <Button type="submit" variant="contained" color="primary"> VER </Button>
      </form>

      <Modal open={modalOpen} onClose={handleClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
        <div style={{ backgroundColor: '#FFFFFF', border: '2px solid #000000', boxShadow: '24px', padding: '20px', width: '600px', borderRadius: '10px', textAlign: 'center'}}>
        <HighlightOffIcon onClick={handleClose}/>
        <p textAlign='center'><strong>{nombres} {apellidos}</strong></p>
        <p><strong>({edad} años/ {sexo})</strong></p>
          
          
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '48%', borderRight: '1px solid black', paddingRight: '10px' }}>
              <h2 style={{ textAlign: 'center' }}>Foto del Paciente</h2>
              {foto && <img src={foto} alt="Foto del paciente" style={{ maxWidth: '300px', height: 'auto' }} />}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '48%', paddingLeft: '10px' }}>
              <h2 style={{ textAlign: 'center' }}>Información Básica</h2>
              <p><strong>Nombres:</strong> {nombres}</p>
              <p><strong>Apellidos:</strong> {apellidos}</p>
              <p><strong>Sexo:</strong> {sexo}</p>
              <p><strong>Edad:</strong> {edad}</p>
              <p><strong>Teléfono:</strong> {telefono}</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '48%', borderRight: '1px solid black', paddingRight: '10px' }}>
              <h2 style={{ textAlign: 'center' }}>Enfermedades Preexistentes</h2>
              <ul>
                {diabete && <li>Diabetes</li>}
                {cirrosis && <li>Cirrosis</li>}
                {vih && <li>VIH/SIDA</li>}
                {hipertension && <li>Hipertensión</li>}
                {paraplejia && <li>Paraplejia</li>}
                {lupus && <li>Lupus</li>}
              </ul>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '48%', paddingLeft: '10px' }}>
              <h2 style={{ textAlign: 'center' }}>Motivo de Consulta y Médico Tratante</h2>
              <p><strong>Motivo de Consulta:</strong> {motivoConsulta}</p>
              <p><strong>Médico Tratante:</strong> {medicoTratante}</p>
            </div>
          </div>
          <Button onClick={handleClose} variant="contained" color="secondary" style={{ marginTop: '20px', width: '100%' }}>Cerrar</Button>
          

        </div>
      </Modal>
    </div>
  );
};

export default Formulario;

