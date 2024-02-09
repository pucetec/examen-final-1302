import { Modal, Box } from "@mui/material";
import Typography from "../../common/Typography/Typography";
import { useProductInfo } from "../../contexts/ProductContext";

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

export const Modal = () => {
  const { isModalOpen, closeModal } = useProductInfo();

  return (
    <div style={{ margin: "25%" }}>
      <Modal open={isModalOpen} onClose={closeModal}>
        <Box sx={style}>
          <Typography variant={"h4"} value={"Información de productos"} />
          <hr />
        </Box>
      </Modal>
    </div>
  );
};
