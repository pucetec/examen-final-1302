import Typography from "../../common/Typography/Typography";
import { Grid, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { TextField } from "../../common/InputBox/InputBox";
import { useProductInfo } from "../../contexts/ProductContext";
import { Button } from "../../common/Button/Button";

export const ProductCard = ({ value }) => {
  const {
    productName,
    setProductName,
    productValue,
    setProductValue,
    productImage,
    setProductImage,
    productSize,
    setProductSize,
    productDescription,
    setProductDescription,
    openModal,
  } = useProductInfo();

  const handleSubmit = (event) => {
    event.preventDefault();
    setProductName(event.target.elements.productName.value);
    setProductValue(event.target.elements.productValue.value);
    setProductImage(event.target.elements.productImage.value);
    setProductSize(event.target.elements.productSize.value);
    setProductDescription(event.target.elements.productDescription.value);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "40%" }}>
        <Grid container>
          <Grid item xl={11}>
            <Typography variant={"h6"} value={value} />
          </Grid>
          <Grid item xl={1}>
            <FormGroup row>
              <FormControlLabel control={<Checkbox />} />
            </FormGroup>
          </Grid>
        </Grid>
        <hr />
        <div>
          <form onSubmit={handleSubmit}>
            <Grid container xl={12}>
              <Grid item xl={2}>
                <Typography variant={"h6"} value={"Nombre: "} />
              </Grid>
              <Grid item xl={10}>
                <TextField placeholder={"Producto"} name="productName" />
              </Grid>

              <Grid item xl={2}>
                <Typography variant={"h6"} value={"Valor: "} />
              </Grid>
              <Grid item xl={10}>
                <TextField placeholder={"0.00"} name="productValue" />
              </Grid>

              <Grid item xl={2}>
                <Typography variant={"h6"} value={"Imagen: "} />
              </Grid>
              <Grid item xl={10}>
                <TextField placeholder={"URL"} name="productImage" />
              </Grid>

              <Grid item xl={2}>
                <Typography variant={"h6"} value={"Tamaño disponible: "} />
              </Grid>
              <Grid item xl={10}>
                <FormGroup row>
                  <FormControlLabel control={<Checkbox />} label="Large" />
                  <FormControlLabel control={<Checkbox />} label="Medium" />
                  <FormControlLabel control={<Checkbox />} label="Small" />
                </FormGroup>
              </Grid>

              <Grid item xl={2}>
                <Typography variant={"h6"} value={"Descripción: "} />
              </Grid>
              <Grid item xl={10}>
                <TextField
                  placeholder={"Describe el objeto..."}
                  name="productDescription"
                />
              </Grid>
            </Grid>
            <div onClick={() => openModal()}>Mostrar info</div>
          </form>
        </div>
      </div>
    </div>
  );
};
