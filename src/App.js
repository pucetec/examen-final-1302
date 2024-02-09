import React from 'react';
import { PatientProvider } from './context/PatientContext';
import PatientForm from './components/PatientForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <PatientProvider>
        <PatientForm />
      </PatientProvider>
    </div>
  );
}

export default App;
