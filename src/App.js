import "./App.css";
import { ProveedorDeContexto } from "./contexts/Contexto";
import Producto1 from "./components/Producto1/Producto1";
import Producto2 from "./components/Producto2/Producto2";
import Producto3 from "./components/Producto3/Producto3";


const App = () => {

  return (

    <ProveedorDeContexto>
      <div className="contenedor-general">
        <h2>CMS Tienda Deportiva (CTD)</h2><br />
        <div className="contenedor-producto-1">
          <Producto1 />
        </div>
        <div className="contenedor-producto-2">
          <Producto2 />
        </div>
        <div className="contenedor-producto-3">
          <Producto3 />
        </div>
      </div>
    </ProveedorDeContexto>

  );

};

export default App;
