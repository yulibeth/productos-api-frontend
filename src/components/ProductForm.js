import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ onSave }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidadStock, setCantidadStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = { nombre, descripcion, precio, cantidadStock };

    // Crear un nuevo producto
    axios.post('http://localhost:8080/api/productos', newProduct)
      .then(response => {
        // Después de agregar el producto, pasar el nuevo producto para agregarlo directamente a la lista
        onSave(response.data); 
        setNombre('');
        setDescripcion('');
        setPrecio('');
        setCantidadStock('');
      })
      .catch(error => console.error('Error al agregar el producto', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>
      <div className="form-group">
        <label>Nombre</label>
        <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Descripción</label>
        <input type="text" className="form-control" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Precio</label>
        <input type="number" step="0.01" className="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Cantidad en Stock</label>
        <input type="number" className="form-control" value={cantidadStock} onChange={(e) => setCantidadStock(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
  );
};

export default ProductForm;
