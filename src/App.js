
import Input from "./common/Input/Input.js"
import Buttom from "./common/Buttom/Buttom.js";
import CheckBoxLabel from "./components/CheckBoxLabel/CheckBoxLabel.js";
import CustomRadio from "./common/Radio/Radio.js";

function App() {
  return (
    <div className="App" >
    <div>
      <label type="text">Nombre</label> 
      <Input ></Input>
    </div>
    <div>
      <label type="text">Apellido</label> 
      <Input ></Input>
    </div>
    <div>
      <label type="text">sexo</label> 
      <CustomRadio></CustomRadio>
      
    </div>
    <div>
      <label type="text">Edad</label> 
      <Input ></Input>
    </div>
    <div>
      <label type="text">Telefono</label> 
      <Input ></Input>
    </div>
    <div>
      <label type="text">foto</label> 
      <Input ></Input>
    </div>
    <div>
      <label type="text">Edad</label> 
      <CheckBoxLabel>Malaria</CheckBoxLabel>
      <CheckBoxLabel>Diabetes</CheckBoxLabel>
      <CheckBoxLabel>Gonorrea</CheckBoxLabel>
      <CheckBoxLabel>Gripe</CheckBoxLabel>
      <CheckBoxLabel>Dengue</CheckBoxLabel>
    </div>
    <Buttom onClick={""}>ver</Buttom> 
    </div>
  );
}

export default App;
