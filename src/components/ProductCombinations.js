import React, { useState } from 'react';
import axios from 'axios';

const ProductCombinations = () => {
  const [valor, setValor] = useState('');
  const [combinaciones, setCombinaciones] = useState([]);

  const handleCombinations = () => {
    axios.get(`http://localhost:8080/api/productos/combinaciones/${valor}`)
      .then(response => {
        console.log("Respuesta del backend:", response.data);
        setCombinaciones(response.data);
      })
      .catch(error => console.error('Error al obtener las combinaciones', error));
  };

  return (
    <div>
      <h2>Combinaciones de Productos</h2>
      <input
        type="number"
        className="form-control"
        placeholder="Introduce un valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button className="btn btn-success" onClick={handleCombinations}>Obtener Combinaciones</button>
      <ul>
        {combinaciones.map((combinacion, index) => {
          // Verificamos que la combinación tenga la estructura correcta
          if (!Array.isArray(combinacion) || combinacion.length < 2) {
            return <li key={index}>❌ Datos inválidos</li>;
          }

          const [productos, total] = combinacion; // Extraemos productos y total

          if (!Array.isArray(productos)) {
            return <li key={index}>❌ Productos inválidos</li>;
          }

          return (
            <li key={index}>
              <strong>Productos:</strong> {productos.join(', ')} <br />
              <strong>Total:</strong> ${total}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductCombinations;
