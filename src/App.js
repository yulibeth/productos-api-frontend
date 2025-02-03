import React, { useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import ProductCombinations from './components/ProductCombinations';

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/productos/${id}`)
      .then(() => alert('Producto eliminado'))
      .catch((error) => alert('Error al eliminar producto: ', error));
  };

  return (
    <div className="container">
      <h1>Aplicación de Gestión de Productos</h1>
      <button className="btn btn-primary" onClick={() => setIsFormVisible(!isFormVisible)}>
        {isFormVisible ? 'Cancelar' : 'Agregar Producto'}
      </button>
      {isFormVisible && <ProductForm onSave={() => setIsFormVisible(false)} />}
      <ProductList onDelete={handleDelete} />
      <ProductCombinations />
    </div>
  );
}

export default App;
