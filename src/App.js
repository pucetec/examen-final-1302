import * as React from "react";
import "./App.css";

import Modals from "./Modal/Modal";
function App() {
  const [name, setName] = React.useState("");
  const [name2, setName2] = React.useState("");
  const [name3, setName3] = React.useState("");

  const [valor, setValor] = React.useState("");
  const [valor2, setValor2] = React.useState("");
  const [valor3, setValor3] = React.useState("");

  const [descripcion, setDescripcion] = React.useState("");
  const [descripcion2, setDescripcion2] = React.useState("");
  const [descripcion3, setDescripcion3] = React.useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleChangevalor = (e) => {
    setValor(e.target.value);
  };
  const handleChangedesc = (e) => {
    setDescripcion(e.target.value);
  };

  const handleChange2 = (e) => {
    setName2(e.target.value);
  };
  const handleChangevalor2 = (e) => {
    setValor2(e.target.value);
  };
  const handleChangedesc2 = (e) => {
    setDescripcion2(e.target.value);
  };
  const handleChange3 = (e) => {
    setName3(e.target.value);
  };
  const handleChangevalor3 = (e) => {
    setValor3(e.target.value);
  };
  const handleChangedesc3 = (e) => {
    setDescripcion3(e.target.value);
  };
  return (
    <div className="App">
      <h1>CMS TIENDA DEPORTIVA</h1>
      <input type="checkbox" value="first_checkbox" />
      <h2>Producto 1</h2>
      <label for="name">Ingrese su nombre</label>
      <input type="text" id="name" value={name} onChange={handleChange} />
      <br />
      <br />
      <label for="valor">valor</label>
      <input
        type="valor"
        id="valor"
        value={valor}
        onChange={handleChangevalor}
      />
      <br />
      <br />
      <label for="url">URL</label>
      <input type="url" />
      <br />
      <br />
      <label>
        <label for="name">Tamaño disponible</label>
        <input type="checkbox" id="cbox1" value="first_checkbox" /> LARGE
      </label>
      <input type="checkbox" id="cbox2" value="second_checkbox" />
      <label for="cbox2">MEDIUM</label>
      <input type="checkbox" id="cbox3" value="third_checkbox" />
      <label for="cbox2">SMALL</label>
      <br />
      <br />
      <label for="descripcion">descripcion</label>
      <input
        type="descripcion"
        id="descripcion"
        value={descripcion}
        onChange={handleChangedesc}
      />
      <br />
      <br />
      <h2>Producto 2</h2>
      <label for="name2">Ingrese su nombre</label>
      <input type="text" id="name2" value={name2} onChange={handleChange2} />
      <br />
      <br />
      <label for="valor2">valor</label>
      <input
        type="valor2"
        id="valor2"
        value={valor2}
        onChange={handleChangevalor2}
      />
      <br />
      <br />
      <label for="url">URL</label>
      <input type="url" />
      <br />
      <br />
      <label>
        <label for="name">Tamaño disponible</label>
        <input type="checkbox" id="cbox1" value="first_checkbox" /> LARGE
      </label>
      <input type="checkbox" id="cbox2" value="second_checkbox" />
      <label for="cbox2">MEDIUM</label>
      <input type="checkbox" id="cbox3" value="third_checkbox" />
      <label for="cbox2">SMALL</label>
      <br />
      <br />
      <label for="descripcion2">descripcion</label>
      <input
        type="descripcion2"
        id="descripcion2"
        value={descripcion2}
        onChange={handleChangedesc2}
      />
      <br />
      <br />
      <h2>Producto 3</h2>
      <label for="name3">Ingrese su nombre</label>
      <input type="text" id="name3" value={name3} onChange={handleChange3} />
      <br />
      <br />
      <label for="valor3">valor</label>
      <input
        type="valor3"
        id="valor3"
        value={valor3}
        onChange={handleChangevalor3}
      />
      <br />
      <br />
      <label for="url">URL</label>
      <input type="url" />
      <br />
      <br />
      <label>
        <label for="name">Tamaño disponible</label>
        <input type="checkbox" id="cbox1" value="first_checkbox" /> LARGE
      </label>
      y
      <input type="checkbox" id="cbox2" value="second_checkbox" />
      <label for="cbox2">MEDIUM</label>
      <input type="checkbox" id="cbox3" value="third_checkbox" />
      <label for="cbox2">SMALL</label>
      <br />
      <br />
      <label for="descripcion3">descripcion</label>
      <input
        type="descripcion3"
        id="descripcion3"
        value={descripcion3}
        onChange={handleChangedesc3}
      />
      <br />
      <br />
      <Modals
        name={name}
        valor={valor}
        descripcion={descripcion}
        name2={name2}
        valor2={valor2}
        descripcion2={descripcion2}
        name3={name3}
        valor3={valor3}
        descripcion3={descripcion3}
      />
    </div>
  );
}

export default App;
