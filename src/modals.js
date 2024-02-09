const Modal = ({

    nombres,
  
    apellidos,
  
    sexo,
  
    edad,
  
    hcp,
  
    telefono,
  
    enfermedades,
  
    medico,
  
    notas,
  
    closeModal,
  
  }) => {
  
    return (
  
      <div className="modal">
  
        <div className="modal-content">
  
          <Typography variant="h5" component="h2">
  
            Información Básica
  
          </Typography>
  
          <Typography variant="body1">
  
            Nombres: {nombres}
  
          </Typography>
  
          <Typography variant="body1">
  
            Apellidos: {apellidos}
  
          </Typography>
  
          <