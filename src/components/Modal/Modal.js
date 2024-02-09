import React from "react";
import { Modal as CustomModal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "../../common/Typography/Typography";
import { useFormContext } from "../../context/Form";
import CloseButton from "../../common/Button/CloseButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Modal = () => {
  const {
    open,
    setOpen,
    name,
    lastName,
    age,
    gender,
    image,
    personalInfo,
    phone,
  } = useFormContext();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <CustomModal open={open}>
      <Box sx={style}>
        <Typography level={"h1"}>
          {name} {lastName}
        </Typography>
        <Typography level={"h1"}>
          ({age} años / {gender})
        </Typography>
        <div>
          <img src={image} height={"200 px"} width={"400 px"} />
        </div>
        <div>
          <table>
            <tr>
              <th>
                <Typography level={"h2"}>Información Básica</Typography>
              </th>
            </tr>
            <>
              <tr>
                <td>Nombres: {name} </td>
              </tr>
              <tr>
                <td>Apellidos: {lastName}</td>
              </tr>
              <tr>
                <td>Edad: {age}</td>
              </tr>
              <tr>
                <td>Teléfono: {phone}</td>
              </tr>
            </>
          </table>
        </div>
        <CloseButton />
      </Box>
    </CustomModal>
  );
};

export default Modal;
