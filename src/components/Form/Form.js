import React, { useState } from "react";
import Typography from "../../common/Typography/Typography";
import TextField from "../../common/TextField/TextField";
import Box from "../../common/Box/Box";
import Button from "../../common/Button/Button";

const Form = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    valor: "",
    tamaños: [],
    descripcion: "",
    imagenURL: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSizeChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setFormData({
      ...formData,
      tamaños: selectedOptions,
    });
  };

  const handleSubmit = () => {
    onFormSubmit(formData);
  };

  return (
    <div align="center">
      <div>
        <Typography leve={"h1"} children={"CMS Tienda Deportiva"} />
      </div>
      <br></br>
      <Box>
        <div>
          <Typography leve={"h2"} children={"Producto 1"} />
        </div>
        <br></br>
        <div>
          <label>Nombre</label>
          <TextField
            label={"Ingresa nombre del producto"}
            variant={"outlined"}
            name="nombre"
            onChange={handleInputChange}
          />
        </div>
        <br></br>
        <div>
          <label>Valor</label>
          <TextField
            label={"Ingresa el valor"}
            variant={"outlined"}
            name="valor"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Imagen URL</label>
          <TextField
            label={"Ingresa la URL de la imagen"}
            variant={"outlined"}
            name="imagenURL"
            onChange={handleInputChange}
          />
        </div>
        <br></br>
        <div>
          <label>Tamaño Disponible:</label>
          <div>
            <label>
              <input
                type="checkbox"
                value="small"
                onChange={handleSizeChange}
              />
              Small
            </label>
            <label>
              <input
                type="checkbox"
                value="medium"
                onChange={handleSizeChange}
              />
              Medium
            </label>
            <label>
              <input
                type="checkbox"
                value="large"
                onChange={handleSizeChange}
              />
              Large
            </label>
          </div>
        </div>
        <br></br>
        <div>
          <label>Descripción</label>
          <TextField
            label={"Agrega un Descripcion"}
            variant={"outlined"}
            name="descripcion"
            onChange={handleInputChange}
          />
        </div>
        <br></br>
        <Button variant={"contained"} value={"Enviar"} onClick={handleSubmit} />
      </Box>
      <Box>
        <div>
          <Typography leve={"h2"} children={"Producto 2"} />
        </div>
        <br></br>
        <div>
          <label>Nombre</label>
          <TextField
            label={"Ingresa nombre del producto"}
            variant={"outlined"}
            name="nombre"
            onChange={handleInputChange}
          />
        </div>
        <br></br>
        <div>
          <label>Valor</label>
          <TextField
            label={"Ingresa el valor"}
            variant={"outlined"}
            name="valor"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Imagen URL</label>
          <TextField
            label={"Ingresa la URL de la imagen"}
            variant={"outlined"}
            name="imagenURL"
            onChange={handleInputChange}
          />
        </div>
        <br></br>
        <div>
          <label>Tamaño Disponible:</label>
          <div>
            <label>
              <input
                type="checkbox"
                value="small"
                onChange={handleSizeChange}
              />
              Small
            </label>
            <label>
              <input
                type="checkbox"
                value="medium"
                onChange={handleSizeChange}
              />
              Medium
            </label>
            <label>
              <input
                type="checkbox"
                value="large"
                onChange={handleSizeChange}
              />
              Large
            </label>
          </div>
        </div>
        <br></br>
        <div>
          <label>Descripción</label>
          <TextField
            label={"Agrega un Descripcion"}
            variant={"outlined"}
            name="descripcion"
            onChange={handleInputChange}
          />
        </div>
        <br></br>
        <Button variant={"contained"} value={"Enviar"} onClick={handleSubmit} />
      </Box>
      <Box>
        <div>
          <Typography leve={"h2"} children={"Producto 3"} />
        </div>
        <br></br>
        <div>
          <label>Nombre</label>
          <TextField
            label={"Ingresa nombre del producto"}
            variant={"outlined"}
            name="nombre"
            onChange={handleInputChange}
          />
        </div>
        <br></br>
        <div>
          <label>Valor</label>
          <TextField
            label={"Ingresa el valor"}
            variant={"outlined"}
            name="valor"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Imagen URL</label>
          <TextField
            label={"Ingresa la URL de la imagen"}
            variant={"outlined"}
            name="imagenURL"
            onChange={handleInputChange}
          />
        </div>
        <br></br>
        <div>
          <label>Tamaño Disponible:</label>
          <div>
            <label>
              <input
                type="checkbox"
                value="small"
                onChange={handleSizeChange}
              />
              Small
            </label>
            <label>
              <input
                type="checkbox"
                value="medium"
                onChange={handleSizeChange}
              />
              Medium
            </label>
            <label>
              <input
                type="checkbox"
                value="large"
                onChange={handleSizeChange}
              />
              Large
            </label>
          </div>
        </div>
        <br></br>
        <div>
          <label>Descripción</label>
          <TextField
            label={"Agrega un Descripcion"}
            variant={"outlined"}
            name="descripcion"
            onChange={handleInputChange}
          />
        </div>
        <br></br>
        <Button variant={"contained"} value={"Enviar"} onClick={handleSubmit} />
      </Box>
    </div>
  );
};

export default Form;
