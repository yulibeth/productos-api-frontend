import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [editProduct, setEditProduct] = useState(null); // Producto en edición
  const [formData, setFormData] = useState({ nombre: '', descripcion: '', precio: '', cantidadStock: '' });

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = () => {
    axios.get('http://localhost:8080/api/productos')
      .then(response => setProductos(response.data))
      .catch(error => console.error('Error al cargar los productos', error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/productos/${id}`)
      .then(() => {
        setProductos(productos.filter(producto => producto.id !== id)); // Eliminar producto de la lista sin recargar
      })
      .catch(error => console.error('Error al eliminar el producto', error));
  };

  const handleEditClick = (producto) => {
    setEditProduct(producto.id);
    setFormData({ ...producto });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:8080/api/productos/${editProduct}`, formData)
      .then(() => {
        fetchProductos(); // Recargar lista de productos
        setEditProduct(null); // Salir del modo edición
      })
      .catch(error => console.error('Error al actualizar el producto', error));
  };

  return (
    <div>
      <h2>Listado de Productos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Cantidad en Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio}</td>
              <td>{producto.cantidadStock}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(producto.id)}>Eliminar</button>
                <button className="btn btn-warning ms-2" onClick={() => handleEditClick(producto)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Formulario de edición (aparece solo si hay un producto en edición) */}
      {editProduct && (
        <div>
          <h3>Editar Producto</h3>
          <form>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} className="form-control mb-2" />
            <input type="text" name="descripcion" value={formData.descripcion} onChange={handleInputChange} className="form-control mb-2" />
            <input type="number" name="precio" value={formData.precio} onChange={handleInputChange} className="form-control mb-2" />
            <input type="number" name="cantidadStock" value={formData.cantidadStock} onChange={handleInputChange} className="form-control mb-2" />
            <button type="button" className="btn btn-success" onClick={handleUpdate}>Guardar Cambios</button>
            <button type="button" className="btn btn-secondary ms-2" onClick={() => setEditProduct(null)}>Cancelar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductList;
