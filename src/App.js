import Products from "./components/Products/Products";
import { ProductoContextProvider } from "./contexts/ProductContext";
import Modal from "./components/Modal/Modal" 
const App = () => {
  return (
    <ProductoContextProvider value={{ setProduct }}>
      <div
        style={{
          width: "20%",
          margin: "auto",
        }}
      />
      <input onChange={(event) => setProduct(event)} />
      <Products></Products>
    </ProductoContextProvider>

    <Modal>
      
    </Modal>
  );
};

export default App;
