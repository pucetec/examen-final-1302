import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./App.css";
import CustomButton from "./common/Button";
import CustomTextField from "./common/TexField";
import CustomModal from "./common/Modal";
import CustomImage from "./common/Image";
import CustomRadioButtonsGroup from "./common/RadioButton";
import CustomCheckBox from "./common/CheckBox";
import CustomSelect from "./common/Select";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emergencyText, setEmergencyText] = useState("");
  const [gender, setGender] = useState("female");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedAge, setSelectedAge] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const genderOptions = [
    { value: "Masculino", label: "Masculino" },
    { value: "Femenino", label: "Femenino" },
    { value: "Otro", label: "Otro" },
  ];

  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleIngresarClick = () => {
    setIsModalOpen(true); // Abre el modal al hacer clic en Ingresar
  };
  const [checkboxes, setCheckboxes] = useState({
    diabetes: false,
    cirrosis: false,
    vihSida: false,
    hipertension: false,
    lupus: false,
    covid: false,
  });
  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleAgeChange = (value) => {
    setSelectedAge(value);
  };

  const ageOptions = [
    { value: "Dr Manuel Bravo Marlo", label: "Dr Manuel Bravo Marlo" },
    { value: "Dr. Gregory House", label: "Dr. Gregory House" },
    { value: "Dr Zhivago", label: "Dr Zhivago" },
  ];

  const [emergenciasSinAsignar, setEmergenciasSinAsignar] = useState([]);

  const [emergencyData, setEmergencyData] = useState({
    nombres: "",
    apellidos: "",
    sexo: "",
    edad: "",
    telefono: "",
    notas: "",
  });

  const handleTextFieldChange = (event, fieldName) => {
    setEmergencyData({
      ...emergencyData,
      [fieldName]: event.target.value,
    });
  };

  const handleSubmit = () => {
    // Aquí puedes hacer lo que necesites con los valores del formulario
    console.log("Formulario enviado:", emergencyData);

    setEmergencyData({
      nombres: "",
      apellidos: "",
      sexo: "",
      edad: "",
      telefono: "",
      notas: "",
    });
  };
  const Enviar = [];
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  //la emergencia que le doy click le guardo en un estado global, y cuando le doy a enviar ato las 2 cosas

  return (
    <div className="App">
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h5" gutterBottom>
          Historia clinica del paciente
        </Typography>
        <Typography variant="h5" gutterBottom>
          Nombres
          <CustomTextField
            label="Nombres"
            name="nombres"
            value={emergencyData.nombres}
            onChange={(event) => handleTextFieldChange(event, "nombres")}
          />
        </Typography>
        <Typography variant="h5" gutterBottom>
          Apellidos
          <CustomTextField
            label="Apellidos"
            name="apellidos"
            value={emergencyData.apellidos}
            onChange={(event) => handleTextFieldChange(event, "apellidos")}
          />
        </Typography>
        <Typography variant="h5" gutterBottom>
          Sexo
          <CustomRadioButtonsGroup
            options={genderOptions}
            defaultValue={gender}
            onChange={handleGenderChange}
          />
        </Typography>
        <Typography variant="h5" gutterBottom>
          Edad
          <CustomTextField
            label="Edad"
            name="edad"
            value={emergencyData.edad}
            onChange={(event) => handleTextFieldChange(event, "edad")}
          />
        </Typography>
        <Typography variant="h5" gutterBottom>
          Telefono
          <CustomTextField
            label="Telefono"
            name="telefono"
            value={emergencyData.telefono}
            onChange={(event) => handleTextFieldChange(event, "telefono")}
          />
        </Typography>

        <Typography variant="h5" gutterBottom>
          Foto
          <CustomTextField
            label="Foto"
            onChange={handleTextFieldChange}
            value={emergencyText}
          />
        </Typography>
        <CustomImage
          src="https://i.pinimg.com/736x/6e/5d/da/6e5ddab8219a790a1f92df0d916f3ffa.jpg"
          alt="Murdock"
          width="150px"
          height="200px"
        />

        <Typography variant="h5" gutterBottom>
          Enfermedades pre-existentes
          <Box display="flex" flexDirection="row" flexWrap="wrap">
            <CustomCheckBox
              label="Diabetes"
              checked={checkboxes.diabetes}
              onChange={handleCheckBoxChange}
              name="diabetes"
            />
            <CustomCheckBox
              label="Cirrosis"
              checked={checkboxes.cirrosis}
              onChange={handleCheckBoxChange}
              name="cirrosis"
            />
            <CustomCheckBox
              label="VIH/Sida"
              checked={checkboxes.vihSida}
              onChange={handleCheckBoxChange}
              name="vihSida"
            />
            <CustomCheckBox
              label="Hipertension"
              checked={checkboxes.hipertension}
              onChange={handleCheckBoxChange}
              name="hipertension"
            />
            <CustomCheckBox
              label="Lupus"
              checked={checkboxes.lupus}
              onChange={handleCheckBoxChange}
              name="lupus"
            />
            <CustomCheckBox
              label="Covid"
              checked={checkboxes.covid}
              onChange={handleCheckBoxChange}
              name="covid"
            />
          </Box>
        </Typography>

        <Typography variant="h5" gutterBottom>
          Medico Tratante
          <CustomSelect
            label=""
            options={ageOptions}
            defaultValue={selectedAge}
            onChange={handleAgeChange}
          />
          <p>Medico Tratante: {selectedAge}</p>
        </Typography>

        <Typography variant="h5" gutterBottom>
          Notas
          <CustomTextField
            label="Notas"
            name="notas"
            value={emergencyData.notas}
            onChange={(event) => handleTextFieldChange(event, "notas")}
          />
        </Typography>
        <CustomButton onClick={handleOpenModal}>Abrir Modal</CustomButton>
      </Box>
      <CustomModal
        open={isModalOpen}
        onClose={handleCloseModal}
        formValues={emergencyData}
        onSubmit={handleSubmit}
        title="Datos del Paciente"
        textFieldsData={[
          { label: "Nombres", value: emergencyData.nombres },
          { label: "Apellidos", value: emergencyData.apellidos },
          { label: "Edad", value: emergencyData.edad },
          { label: "Telefono", value: emergencyData.telefono },
          { label: "Notas", value: emergencyData.notas },
        ]}
      />
    </div>
  );
}

export default App;
