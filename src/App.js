import React from "react";
import { FormProvider } from "./Context/FormContext";
import { ProductForm } from "./Components/ProductForm/ProductForm";
import { ProductModal } from "./Components/ProductModal/ProductModal";

function App() {
  return (
    <>
      <FormProvider>
        <div className="App container max-vh-100 my-4">
          <ProductForm professor={"Producto 1"} idModal={"#idModal1"} />
          <ProductModal professor={"Producto 1"} idModal={"idModal1"} />
        </div>
      </FormProvider>
      <FormProvider>
        <div className="App container max-vh-100 my-4">
          <ProductForm professor={"Producto 2"} idModal={"#idModal2"} />
          <ProductModal professor={"Producto 2"} idModal={"idModal2"} />
        </div>
      </FormProvider>
    </>
  );
}
export default App;
