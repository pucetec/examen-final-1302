import * as React from "react";
import "./App.css";
import RowRadioButtonsGroup from "./common/Radio";
import Typography from "./common/Typography";
import Input from "./common/InputText";
import CheckBox from "./common/CheckBox";
import ComboBox from "./common/Autocomplete";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

function App() {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    nombre: "",
    apellido: "",
    edad: "",
    telefono: "",
    foto: "",
    notas: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <div>
        <Typography
          variant={"h3"}
          align={"center"}
          value={"Historia Clínica de Paciente"}
        />

        <Typography variant={"subtitle1"} align={"right"} value={"(HCP)"} />
      </div>
      <div>
        <Box display="flex" alignItems="center">
          <Typography variant={"subtitle1"} align={"left"} value={"Nombres:"} />
          <Input
            color={"primary"}
            variant={"outlined"}
            name={"nombre"}
            onChange={handleChange}
          />
        </Box>
        <br></br>
        <Box display="flex" alignItems="center">
          <Typography
            variant={"subtitle1"}
            align={"left"}
            value={"Apellidos:"}
          />
          <Input
            color={"primary"}
            variant={"outlined"}
            name={"apellido"}
            onChange={handleChange}
          />
        </Box>
      </div>
      <br></br>
      <div>
        <RowRadioButtonsGroup></RowRadioButtonsGroup>
      </div>
      <br></br>
      <div>
        <Box display="flex" alignItems="center">
          <Typography variant={"subtitle1"} align={"left"} value={"Edad:"} />

          <Input
            color={"primary"}
            variant={"outlined"}
            name={"edad"}
            onChange={handleChange}
          />
        </Box>
        <br></br>
        <Box display="flex" alignItems="center">
          <Typography
            variant={"subtitle1"}
            align={"left"}
            value={"Teléfono:"}
          />

          <Input
            color={"primary"}
            variant={"outlined"}
            name={"telefono"}
            onChange={handleChange}
          />
        </Box>
        <br></br>
        <Box display="flex" alignItems="center">
          <Typography variant={"subtitle1"} align={"left"} value={"Foto:"} />

          <Input
            color={"primary"}
            variant={"outlined"}
            name={"foto"}
            onChange={handleChange}
          />
        </Box>
      </div>
      <br></br>
      <div>
        <CheckBox></CheckBox>
      </div>
      <div>
        <ComboBox></ComboBox>
      </div>
      <br></br>
      <div>
        <Box display="flex" alignItems="center">
          <Typography variant={"subtitle1"} align={"left"} value={"Notas"} />
          <Input
            color={"primary"}
            variant={"outlined"}
            name={"nota"}
            onChange={handleChange}
          />
        </Box>
      </div>
      <br></br>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Ver
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Información del Paciente</DialogTitle>
        <DialogContent>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <Typography
                variant={"subtitle1"}
                align={"left"}
                value={"Nombre:"}
              />
              <Typography variant={"body1"}>{formData.nombre || ""}</Typography>
            </Box>
            <Typography
              variant={"subtitle1"}
              align={"right"}
              value={"Apellido:"}
            />
            <Typography variant={"body1"}>{formData.apellido}</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant={"subtitle1"} align={"left"} value={"Edad:"} />
            <Typography variant={"body1"}>{formData.edad}</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant={"subtitle1"}
              align={"left"}
              value={"Teléfono:"}
            />
            <Typography variant={"body1"}>{formData.telefono}</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant={"subtitle1"} align={"left"} value={"Foto:"} />
            <Typography variant={"body1"}>{formData.foto}</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant={"subtitle1"} align={"left"} value={"Notas:"} />
            <Typography variant={"body1"}>{formData.notas}</Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
