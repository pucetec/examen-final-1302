import React, { useState } from "react";
import Modal from "react-modal";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function App() {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    phone: "",
    photoLink: "",
    enfermedades: {
      diabetes: false,
      VIH: false,
      hipertension: false,
      paraplejia: false,
      lupus: false,
    },
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      enfermedades: {
        ...formData.enfermedades,
        [name]: checked,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="images/67679549-la-frecuencia-cardíaca-dibujo-a-mano-bien-vector-de-la-salud.jpg"
          alt="Logo de la aplicación"
        />
        <center>
          <h1>Historia Clínica de Paciente</h1>
        </center>
        <form onSubmit={handleSubmit}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <TextField
                label="Nombre"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Apellido"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <FormControl className={classes.formControl}>
                <InputLabel>Sexo</InputLabel>
                <Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <MenuItem value="Masculino">Masculino</MenuItem>
                  <MenuItem value="Femenino">Femenino</MenuItem>
                  <MenuItem value="Otro">Otro</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <TextField
                label="Edad"
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Teléfono"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Foto (URL)"
                type="url"
                name="photoLink"
                value={formData.photoLink}
                onChange={handleChange}
              />
            </Grid>
            <p>Enfermedades Preexistentes</p>
            <ul>
              {Object.entries(formData.enfermedades).map(
                ([enfermedad, seleccionada]) => (
                  <li key={enfermedad}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={seleccionada}
                          onChange={handleCheckboxChange}
                          name={enfermedad}
                          color="primary"
                        />
                      }
                      label={enfermedad}
                    />
                  </li>
                )
              )}
            </ul>
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel={`Información de ${formData.firstName} ${formData.lastName}`}
          style={{
            content: {
              width: "45%",
              height: "80%",
              margin: "auto",
            },
          }}
        >
          <h2>
            {formData.firstName} {formData.lastName}
          </h2>
          <img
            src={formData.photoLink}
            alt="Foto del paciente"
            style={{ maxWidth: "100%", maxHeight: "50%", margin: "20px 0" }}
          />
          <p>Edad: {formData.age}</p>
          <p>Sexo: {formData.gender}</p>
          <p>Teléfono: {formData.phone}</p>
          <p>Enfermedades Preexistentes:</p>
          <ul>
            {Object.entries(formData.enfermedades).map(
              ([enfermedad, seleccionada]) =>
                seleccionada && <li key={enfermedad}>{enfermedad}</li>
            )}
          </ul>
          <Button onClick={closeModal} variant="contained" color="secondary">
            Cerrar
          </Button>
        </Modal>
      </header>
    </div>
  );
}

export default App;
