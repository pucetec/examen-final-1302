import React, { useState } from "react";
import Modal from "react-modal";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
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
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Información del Paciente"
          style={{
            content: {
              width: "45%",
              height: "50%",
              margin: "auto",
            },
          }}
        >
          <h2>Información del Paciente</h2>
          <p>
            Nombre: {formData.firstName} {formData.lastName}
          </p>
          <p>Sexo: {formData.gender}</p>
          <p>Edad: {formData.age}</p>
          <p>Teléfono: {formData.phone}</p>
          <p>Foto: {formData.photoLink}</p>
          <Button onClick={closeModal} variant="contained" color="secondary">
            Cerrar
          </Button>
        </Modal>
      </header>
    </div>
  );
}

export default App;
