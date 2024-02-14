import NameInput from "./common/InputText/NameInput";
import PriceInput from "./common/InputText/PriceInput";
import ImageInput from "./common/InputText/ImageInput";
import SizeCheckbox from "./common/InputCheckbox/SizeCheckbox";
import DescriptionTextArea from "./common/TextArea/DescriptionTextArea";
import ViewButton from "./common/Button/ViewButton";
import Typography from "./common/Typography/Typography";
import Modal from "./components/Modal/Modal";
import FormContextProvider from "./context/FormContext";

const App = () => {
  return (
    <FormContextProvider>
      <div>
        <Typography level={"h1"} children={"CMS TIENDA DEPORTIVA"}></Typography>
      </div>
      <div>
        <Typography level={"h2"} children={"Producto 1"}></Typography>
      </div>
      <div>
        <label>Nombre</label>
        <NameInput placeholder={"Nombre del producto"} />
      </div>
      <div>
        <label>Valor</label>
        <PriceInput placeholder={"Precio"} />
      </div>
      <div>
        <label>Imagen</label>
        <ImageInput placeholder={"Ingrese la URL de una imagen"} />
      </div>
      <div>
        <SizeCheckbox />
      </div>
      <div>
        <DescriptionTextArea />
      </div>
      <div>
        <ViewButton />
      </div>
      <Modal />
    </FormContextProvider>
  );
};

export default App;
