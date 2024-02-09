// App.js
import React from 'react';
import { ProductsProvider } from './Components/ProductsContext';
import ProductList from './Components/ProductList';
import SelectedProductsModal from './Components/SelectedProductModal';


const App = () => {
  return (

    
    <ProductsProvider>
      <h1>CMS Tienda deportiva</h1>
      <div>
        <ProductList />
        <SelectedProductsModal />
      </div>
    </ProductsProvider>
  );
}

export default App;
