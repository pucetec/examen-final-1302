import ViewButton from "./common/Button/ViewButton";
import DiaseCheckbox from "./common/InputCheckbox/DiseaseCheckbox";
import GenderRadio from "./common/InputRadio/GenderRadio";
import AgeInput from "./common/InputText/AgeInput";
import ImageInput from "./common/InputText/ImageInput";
import LastNameInput from "./common/InputText/LastNameInput";
import NameInput from "./common/InputText/NameInput";
import PhoneInput from "./common/InputText/PhoneInput";
import DoctorSelect from "./common/Select/DoctorSelect";
import NoteTextArea from "./common/TextArea/NoteTextArea";
import Typography from "./common/Typography/Typography";
import Modal from "./components/Modal/Modal";
import FormContextProvider from "./context/Form";

function App() {
  return (
    <FormContextProvider>
      <div>
        <Typography level={"h1"}>Historia Clínica de Paciente</Typography>
      </div>
      <div>
        <label>Nombres</label>
        <NameInput placeholder={"Nombres"} />
      </div>
      <div>
        <label>Apellidos</label>
        <LastNameInput placeholder={"Apellidos"} />
      </div>
      <div>
        <label>Sexo</label>
        <GenderRadio />
      </div>
      <div>
        <label>Edad</label>
        <AgeInput />
      </div>
      <div>
        <label>Teléfono</label>
        <PhoneInput />
      </div>
      <div>
        <label>Imagen</label>
        <ImageInput />
      </div>
      <div>
        <DiaseCheckbox />
      </div>
      <div>
        <DoctorSelect />
      </div>
      <div>
        <NoteTextArea />
      </div>
      <div>
        <ViewButton />
      </div>
      <Modal />
    </FormContextProvider>
  );
}

export default App;
