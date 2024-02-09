import "./App.css";
import NestedModal from "./NOMBRE/Modal";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="title">
          <h1>Historia Clinica del Paciente</h1>
        </div>

        <div className="one">
          <div>
            Nombres&nbsp;&nbsp;&nbsp;
            <input></input>
          </div>
          <div>
            Apellidos&nbsp;&nbsp;&nbsp;
            <input></input>
          </div>
        </div>

        <div className="genero two">
          Sexo
          <div>
            <input type="radio" id="dewey" name="drone" value="dewey" />
            Masculino
          </div>
          <div>
            <input type="radio" id="dewey" name="drone" value="dewey" />
            Femenino
          </div>
        </div>

        <div className="three">
          <div>
            Edad&nbsp;&nbsp;&nbsp;
            <input></input>
          </div>
        </div>

        <div className="four">
          <div>
            Telefono&nbsp;&nbsp;&nbsp;
            <input></input>
          </div>
        </div>

        <div className="five">
          <div className="perfil">
            
           
            <img src="https://alumni.ucm.es/alumni/m/photos/get_image/file/5c38f56dfe2bfa614d508d4d06a4b662.jpg" alt=""/> 
          </div>
        </div>

        <div className="six">
          <div>
            Enfermededades Preexistentes
            <br></br>
            <div>
              <div className="checks">
                <input type="checkbox" id="cbox2" value="second_checkbox" />
                Diabetes
              </div>

              <div>
                <input type="checkbox" id="cbox2" value="second_checkbox" />
                Hipertension
              </div>
            </div>
            <div>
              <div className="checks">
                <input type="checkbox" id="cbox2" value="second_checkbox" />
                Cirrosis
              </div>

              <div>
                <input type="checkbox" id="cbox2" value="second_checkbox" />
                Paraplejia
              </div>
            </div>
            <div>
              <div className="checks">
                <input type="checkbox" id="cbox2" value="second_checkbox" />
                VIH/Sida
              </div>

              <div>
                <input type="checkbox" id="cbox2" value="second_checkbox" />
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
            <button onclick="window.modal1.showModal1()">Ver</button>
          </div>
        </div>
      </div>
      <NestedModal></NestedModal>
    </div>
  );
}

export default App;