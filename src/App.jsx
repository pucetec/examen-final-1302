import { Button } from "./common/Button/Button";
import Typography from "./common/Typography/Typography";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { ProductProvider } from "./contexts/ProductContext";

const App = () => {
  return (
    <>
      <ProductProvider>
        <Typography
          variant={"h3"}
          value={"CMS Tienda Deportiva"}
          align={"center"}
        />
        <ProductCard value={"Producto 1"}></ProductCard>
        <br />
        <br />
        <ProductCard value={"Producto 2"}></ProductCard>
        <br />
        <br />
        <ProductCard value={"Producto 3"}></ProductCard>
        <br />
        <br />
      </ProductProvider>
    </>
  );
};

export default App;
