import React from "react";
import { Modal as CustomModal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "../../common/Typography/Typography";
import { useFormContext } from "../../context/FormContext";
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
  const { open, name, price, image, size, description } = useFormContext();

  return (
    <CustomModal open={open}>
      <Box sx={style}>
        <div>
          <Typography level={"h1"}>{name}</Typography>
        </div>
        <div>
          <img src={image} height={"400 px"} width={"400 px"} />
        </div>
        <div>
          <Typography level={"h2"}>{description} </Typography>
        </div>
        <div>
          <Typography level={"h2"}>Valor :${price} </Typography>
        </div>
        <div>
          <Typography level={"h2"}>Tamaño Disponible :{size} </Typography>
        </div>
        <CloseButton />
      </Box>
    </CustomModal>
  );
};

export default Modal;
