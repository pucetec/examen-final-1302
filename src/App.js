import "./App.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState } from "react";

function App() {

  const style = {
    position: 'absolute',
    top: '80%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  const BasicModal = () =>{
     
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          Nombre:{nombre}
          Apellido:{apellido}
          Sexo:{sexo}
          Edad:{edad}
          Telefono:{telefono}
          Foto:{foto}
          Medico:{medico}
          Notas: {notas}
          </Box>
        </Modal>
      </div>
    );
  }

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [sexo, setSexo] = useState('');
  const [edad, setEdad] = useState('');
  const [telefono, setTelefono] = useState('');
  const [foto, setFoto] = useState('');
  const [enfermedades, setEnfermedades] = useState([]);
  const [medico, setMedico] = useState('');
  const [notas, setNotas] = useState('');


  const check = () =>{
    if(document.getElementById('gender_Male').checked) {
    setSexo('Masculino')
  }else if(document.getElementById('gender_Female').checked) {
    setSexo('Femenino')
  }
}

const checkBox = (value) =>{
  console.log(value)
setEnfermedades([])
if (value = '1') setEnfermedades(enfermedades.concat(['Diabetes']))
if (value = '2') setEnfermedades(enfermedades.concat(['Hipertensión']))
if (value = '3') setEnfermedades(enfermedades.concat(['Cirrosis']))
if (value = '4') setEnfermedades(enfermedades.concat(['Paraplejia']))
if (value = '5') setEnfermedades(enfermedades.concat(['VIH/Sida']))
if (value = '6') setEnfermedades(enfermedades.concat(['Lupus']))

  if(document.getElementById('cbox1').checked) {
    setEnfermedades(enfermedades.concat(['Diabetes']))
} if(document.getElementById('cbox2').checked) {
  setEnfermedades(enfermedades.concat(['Hipertensión']))
} if(document.getElementById('cbox3').checked) {
  setEnfermedades(enfermedades.concat(['Cirrosis']))
} if(document.getElementById('cbox4').checked) {
  setEnfermedades(enfermedades.concat(['Paraplejia']))
} if(document.getElementById('cbox5').checked) {
  setEnfermedades(enfermedades.concat(['VIH/Sida']))
} if(document.getElementById('cbox6').checked) {
  setEnfermedades(enfermedades.concat(['Lupus']))
}
console.log(enfermedades)
}

  


  return (
    <div className="App">
      <div className="wrapper">
        <div className="title">
          <h1>Historia Clinica del Paciente</h1>
        </div>

        <div className="one">
          <div>
            Nombres&nbsp;&nbsp;&nbsp;
            <input value={nombre} onChange={(e) => setNombre(e.target.value)} nombre></input>
          </div>
          <div>
            Apellidos&nbsp;&nbsp;&nbsp;
            <input value={apellido} onChange={(e) => setApellido(e.target.value)} apellido></input>
          </div>
        </div>

        <div className="genero two">
          Sexo
          <div>
            <input type="radio" id="gender_Male" name="drone" value="dewey" onChange={() => check()}/>
            Masculino
          </div>
          <div>
            <input type="radio" id="gender_Female" name="drone" value="dewey"onChange={() => check()}/>
            Femenino
          </div>
        </div>

        <div className="three">
          <div>
            Edad&nbsp;&nbsp;&nbsp;
            <input value={edad} onChange={(e) => setEdad(e.target.value)}></input>
          </div>
        </div>

        <div className="four">
          <div>
            Telefono&nbsp;&nbsp;&nbsp;
            <input value={telefono} onChange={(e) => setTelefono(e.target.value)}></input>
          </div>
        </div>

        <div className="five">
          <div>
            Foto&nbsp;&nbsp;&nbsp;
            <input value={foto} onChange={(e) => setFoto(e.target.value)}></input>
          </div>
        </div>

        <div className="six">
          <div>
            Enfermededades Preexistentes
            <br></br>
            <div>
              <div className="checks">
                <input type="checkbox" id="cbox1" value="1" onClick={(e) => checkBox(e.target.value)}/>
                Diabetes
              </div>

              <div>
                <input type="checkbox" id="cbox2" value="2" onClick={(e) => checkBox(e.target.value)} />
                Hipertension
              </div>
            </div>
            <div>
              <div className="checks">
                <input type="checkbox" id="cbox3" value="3" onClick={(e) => checkBox(e.target.value)}/>
                Cirrosis
              </div>

              <div>
                <input type="checkbox" id="cbox4" value="4" onClick={(e) => checkBox(e.target.value)}/>
                Paraplejia
              </div>
            </div>
            <div>
              <div className="checks">
                <input type="checkbox" id="cbox5" value="5" onClick={(e) => checkBox(e.target.value)}/>
                VIH/Sida
              </div>

              <div>
                <input type="checkbox" id="cbox6" value="6" onClick={(e) => checkBox(e.target.value)}/>
                Lupus
              </div>
            </div>
          </div>
        </div>

        <div className="seven">
          <div>
            Medico Tratante&nbsp;&nbsp;&nbsp;
            <select name="pets" id="pet-select">
              <option value="">Selecciona un medico</option>
              <option value="Joe Doe">Joe Doe</option>
              <option value="Andres Carrera">Andres Carrera</option>
              <option value="Emilio Piedra">Emilio Piedra</option>
              <option value="Kevin Cando">Kevin Cando</option>
              <option value="Sebastian Rodas">Sebastian Rodas</option>
              <option value="Cristian Yamberla">Cristian Yamberla</option>
            </select>
          </div>
        </div>

        <div className="eigth">
          <div>
            Notas&nbsp;&nbsp;&nbsp;
            <textarea></textarea>
          </div>
        </div>

        <div className="nine">
          <div>
            <button onClick={() =>handleOpen()}>Ver</button>
          </div>
        </div>
      </div>
      <BasicModal></BasicModal>
    </div>
  );
}

export default App;
