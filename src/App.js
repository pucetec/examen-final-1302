import React from "react";
import PantallaPrincipal from "./common/PantallaPrincipal";
import { ProductosProvider } from "./common/ProductosContext";

const App = () => {
  return (
    <ProductosProvider>
      <PantallaPrincipal />
    </ProductosProvider>
  );
};

export default App;
