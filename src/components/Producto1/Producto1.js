import { useContextoGeneral } from "../../contexts/Contexto";
import { Modal } from "@mui/material";



const Producto1 = () => {

  const { nombreProducto1, setNombreProducto1, valorProducto1, setValorProducto1,
    imagenProducto1, setImagenProducto1,
    sizeProducto1, setSizeProducto1, descripcionProducto1, setDescripcionProducto1,
    nombreProducto2, setNombreProducto2, valorProducto2, setValorProducto2,
    imagenProducto2, setImagenProducto2, sizeProducto2, setSizeProducto2,
    descripcionProducto2, setDescripcionProducto2,
    nombreProducto3, setNombreProducto3, valorProducto3,
    imagenProducto3, setImagenProducto3, setValorProducto3, sizeProducto3, setSizeProducto3,
    descripcionProducto3, setDescripcionProducto3, modal, setModal } = useContextoGeneral();


   const abrirModal = () => { setModal(true); };
   const cerrarModal = () => { setModal(false); };



  return (
    <div className="contenedor-producto1">








      <br />

      <label> Producto 1 </label>
      <button className="boton-modal" onClick={ () => abrirModal()  }> Detalle </button>
      <br />
    <label>__________________________________________________</label><br />
    <label>Nombre</label><input value={nombreProducto1} onChange={ event => setNombreProducto1(event.target.value) } /><br />
    <label>Valor</label><input value={valorProducto1} onChange={ event => setValorProducto1(event.target.value) } /><br />
    <label>Imagen</label><input value={imagenProducto1} onChange={ event => setImagenProducto1(event.target.value) } /><br />
    <label>Tamaño</label>
    <input type="checkbox" value={sizeProducto1} onChange={ event => setSizeProducto1(event.target.value) } />
    <label>Large</label>
    <input type="checkbox" value={sizeProducto1} onChange={ event => setSizeProducto1(event.target.value) } />
    <label>Medium</label>
    <input type="checkbox" value={sizeProducto1} onChange={ event => setSizeProducto1(event.target.value) } />
    <label>Small</label>
    <br />
    <label>Descripción</label><input type="text" value={descripcionProducto1} onChange={ event => setDescripcionProducto1(event.target.value) } />
    <br />
    </div>
  );
};

export default Producto1;
