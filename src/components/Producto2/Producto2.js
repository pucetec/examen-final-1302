import { useContextoGeneral } from "../../contexts/Contexto";
import { Modal } from "@mui/material";

const Producto2 = () => {
  
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
    <div className="contenedor-producto2">





      <Modal
        open={modal}
        onClose={cerrarModal}
        aria-labelledby="modal"
        aria-describedby="modal-description"
      >
        <div style={{ padding: '20px', color: 'rgb(700, 750, 780)', backgroundColor: 'rgba(20, 20, 20, 0.9)', width: 'auto',
         margin: 'auto', marginTop: '100px', borderRadius: '8px', borderColor: 'rgba(45, 45, 75, 0.4)', borderStyle:'solid' }}>
          <div className="contenedor-modal">
            <div className="modal-izquierda">
              <label>{nombreProducto1}</label><br />
              <label>____________________________________</label><br />
              {imagenProducto1} <br />
              {descripcionProducto1} <br />
              <label>Valor : {valorProducto1}</label> <br />
              <label>Tamaños disponibles : {sizeProducto1}</label>
            </div>
            <div className="modal-centro">
            <label>{nombreProducto2}</label><br />
              <label>____________________________________</label><br />
              {imagenProducto2} <br />
              {descripcionProducto2} <br />
              <label>Valor : {valorProducto2}</label> <br />
              <label>Tamaños disponibles : {sizeProducto2}</label>
            </div>
            <div className="modal-derecha">
            <label>{nombreProducto3}</label><br />
              <label>____________________________________</label><br />
              {imagenProducto3} <br />
              {descripcionProducto3} <br />
              <label>Valor : {valorProducto3}</label> <br />
              <label>Tamaños disponibles : {sizeProducto3}</label>
            </div>
          </div>
          <br />
          <button className="boton-modal" onClick={ () => { cerrarModal(); } }> CANCELAR </button>
        </div>
      </Modal>


    


      <label> Producto 2 </label>
      <button className="boton-modal" onClick={ () => abrirModal()  }> Detalle </button>
      <br />
    <label>__________________________________________________</label><br />
    <label>Nombre</label><input value={nombreProducto2} onChange={ event => setNombreProducto2(event.target.value) } /><br />
    <label>Valor</label><input value={valorProducto2} onChange={ event => setValorProducto2(event.target.value) } /><br />
    <label>Imagen</label><input value={imagenProducto2} onChange={ event => setImagenProducto2(event.target.value) } /><br />
    <label>Tamaño</label>
    <input type="checkbox" value={sizeProducto2} onChange={ event => setSizeProducto2(event.target.value) } />
    <label>Large</label>
    <input type="checkbox" value={sizeProducto2} onChange={ event => setSizeProducto2(event.target.value) } />
    <label>Medium</label>
    <input type="checkbox" value={sizeProducto2} onChange={ event => setSizeProducto2(event.target.value) } />
    <label>Small</label>
    <br />
    <label>Descripción</label><input type="text" value={descripcionProducto2} onChange={ event => setDescripcionProducto2(event.target.value) } />
    <br />
    </div>
  );


};

export default Producto2;
