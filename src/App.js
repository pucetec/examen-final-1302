import React from 'react';
import Formulario from './Components/Formulario';
import { FormProvider } from './Contexto/ContextoFormulario';

function App() {
  return (
    <FormProvider>
      <Formulario />
    </FormProvider>
  );
}

export default App;
