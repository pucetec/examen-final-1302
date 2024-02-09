import React from "react";
import Boton from "../../common/Boton/Boton";
import Opcion from "../../common/Opcion/Opcion";
import { useContexto } from "../../contexts/Contexto/Contexto";
import Formulario from "../../common/Formulario/Formulario";

const Principal = () => {
  const { open, handleClose, handleOpen, productoSeleccionado, setProductoSeleccionado, handleProductoInfoChange } = useContexto();
  const opcionesTamanio = [
    { id: 1, label: "Large" },
    { id: 2, label: "Medium" },
    { id: 3, label: "Small" },
  ];

  const opcionesProductos = [
    { id: 1, label: "Producto 1" },
    { id: 2, label: "Producto 2" },
    { id: 3, label: "Producto 3" },
  ];

  const handleProductoChange = (event) => {
    const productId = Number(event.target.value);
    const selectedProduct = opcionesProductos.find(product => product.id === productId);
    setProductoSeleccionado(selectedProduct);
  };

  const handleNombreChange = (event) => {
    handleProductoInfoChange(productoSeleccionado.id, 'nombre', event.target.value);
  };

  const handleValorChange = (event) => {
    handleProductoInfoChange(productoSeleccionado.id, 'valor', event.target.value);
  };

  const handleImagenChange = (event) => {
    handleProductoInfoChange(productoSeleccionado.id, 'imagen', event.target.value);
  };

  const handleTamanoChange = (event) => {
    handleProductoInfoChange(productoSeleccionado.id, 'tamano', event.target.value);
  };

  const handleDescripcionChange = (event) => {
    handleProductoInfoChange(productoSeleccionado.id, 'descripcion', event.target.value);
  };

  return (
    <div>
      <h1>Tienda deportiva</h1>
      <Opcion lista={opcionesProductos} onSeleccionChange={handleProductoChange} />

      <div style={{ display: "flex", alignItems: "center" }}>
        <h3 style={{ marginLeft: 50 }}>Producto 1</h3>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginLeft: 50 }}>Nombre</p>
        <Formulario variant="standard" onChange={handleNombreChange} />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginLeft: 50 }}>Valor</p>
        <Formulario variant="standard" onChange={handleValorChange} />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginLeft: 50 }}>Imagen</p>
        <Formulario variant="standard" onChange={handleImagenChange} />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginLeft: 50 }}>Tamaño disponible</p>
        <Opcion lista={opcionesTamanio} onChange={handleTamanoChange} />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginLeft: 50 }}>Descripcion</p>
        <Formulario variant="standard" onChange={handleDescripcionChange} />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <h3 style={{ marginLeft: 50 }}>Producto 2</h3>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginLeft: 50 }}>Nombre</p>
        <Formulario variant="standard" onChange={handleNombreChange} />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginLeft: 50 }}>Valor</p>
        <Formulario variant="standard" onChange={handleValorChange} />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginLeft: 50 }}>Imagen</p>
        <Formulario variant="standard" onChange={handleImagenChange} />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginLeft: 50 }}>Tamaño disponible</p>
        <Opcion lista={opcionesTamanio} onChange={handleTamanoChange} />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginLeft: 50 }}>Descripcion</p>
        <Formulario variant="standard" onChange={handleDescripcionChange} />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <h3 style={{ marginLeft: 50 }}>Producto 3</h3>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginLeft: 50 }}>Nombre</p>
        <Formulario variant="standard" onChange={handleNombreChange} />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginLeft: 50 }}>Valor</p>
        <Formulario variant="standard" onChange={handleValorChange} />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginLeft: 50 }}>Imagen</p>
        <Formulario variant="standard" onChange={handleImagenChange} />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginLeft: 50 }}>Tamaño disponible</p>
        <Opcion lista={opcionesTamanio} onChange={handleTamanoChange} />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginLeft: 50 }}>Descripcion</p>
        <Formulario variant="standard" onChange={handleDescripcionChange} />
      </div>

      <Boton variant="contained" onClick={handleOpen} texto="VER PRODUCTO SELECCIONADO" />
    </div>
  );
};

export default Principal;