import React, { useState } from 'react';

const Producto = ({ producto, seleccionarProducto, esSeleccionado }) => {
  
  const manejarCheckbox = () => {
    seleccionarProducto(producto);
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px', position: 'relative' }}>
      <input
        type="checkbox"
        style={{ position: 'absolute', top: '10px', right: '10px' }}
        checked={esSeleccionado}
        onChange={manejarCheckbox}
      />
      <p><strong>Nombre:</strong> {producto.nombre}</p>
      <p><strong>Valor:</strong> {producto.valor}</p>
      <img src={producto.imagen} alt={`Imagen de ${producto.nombre}`} style={{ width: '100px' }} />
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      <div>
        <strong>Tamaños disponibles:</strong>
        {producto.tamaños.map(tamaño => (
          <span key={tamaño} style={{ marginLeft: '10px' }}>{tamaño}</span>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  const productos = [
    {
      id: 1,
      nombre: 'Camiseta de fútbol',
      valor: '60.5',
      imagen: 'https://i.ebayimg.com/thumbs/images/g/KkAAAOSwIEpk79bP/s-l640.jpg',
      tamaños: ['Large', 'Medium', 'Small'],
      descripcion: 'Camiseta de equipo de fútbol europeo',
    },
    {
      id: 2,
      nombre: 'Balón de fútbol',
      valor: '29.95',
      imagen: 'https://img.freepik.com/vector-gratis/vector-aislado-balon-futbol-realista-sobre-blanco_1284-41932.jpg?size=338&ext=jpg&ga=GA1.1.1803636316.1707350400&semt=ais', 
      tamaños: ['5', '4', '3'],
      descripcion: 'Balón verde',
    },
    {
      id: 3,
      nombre: 'Lentes de natación',
      valor: '21.55',
      imagen: 'https://thesportshop.ec/wp-content/uploads/2019/08/IMG_1743.jpg', 
      tamaños: ['Large', 'Medium', 'Small'],
      descripcion: 'Lentes para ver abajo del agua',
    }
  ];

  const seleccionarProducto = (producto) => {
    setProductosSeleccionados(prev => {
      if (prev.find(p => p.id === producto.id)) {
        return prev.filter(p => p.id !== producto.id);
      } else {
        return [...prev, producto];
      }
    });
  };

  return (
    <div>
      <h1>CMS Tienda Deportiva (CTD)</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          seleccionarProducto={seleccionarProducto}
          esSeleccionado={productosSeleccionados.some(p => p.id === producto.id)}
        />
      ))}
      <button onClick={() => setMostrarModal(true)}>Ver Productos Seleccionados</button>
      {mostrarModal && (
  <div 
    className="modal" 
    style={{ 
      position: 'fixed', 
      top: '50%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)', 
      backgroundColor: 'white', 
      padding: '20px', 
      border: '1px solid black', 
      zIndex: 1000, 
      maxHeight: '80vh', 
      overflowY: 'auto', 
      width: '80%', 
      boxSizing: 'border-box' 
    }}
  >
    <button onClick={() => setMostrarModal(false)}>Cerrar</button>
    {productosSeleccionados.map(p => (
      <div key={p.id} style={{ marginBottom: '10px' }}>
        <p><strong>Nombre:</strong> {p.nombre}</p>
        <p><strong>Valor:</strong> {p.valor}</p>
        <img src={p.imagen} alt={`Imagen de ${p.nombre}`} style={{ maxWidth: '15%' }} />
        <p><strong>Descripción:</strong> {p.descripcion}</p>
        <p><strong>Tamaños disponibles:</strong> {p.tamaños.join(', ')}</p>
      </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;