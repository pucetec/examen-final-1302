import logo from "./logo.svg";
import "./App.css";
import { ContextoProvider } from "./contexts/Contexto/Contexto";
import Principal from "./components/Principal/Principal";
import ModalC from "./components/ModalC/ModalC";

function App() {
  return (
    <ContextoProvider>
      <div className="App">
          <Principal/>
          <ModalC/>
      </div>
    </ContextoProvider>
  );
}

export default App;
