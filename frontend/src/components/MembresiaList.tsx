import { useEffect, useState } from 'react';
import type { MembershipData } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function MembresiaList() {
  const [membresias, setMembresias] = useState<MembershipData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMembresias = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/membresias');
        const data = await response.json();
        setMembresias(data);
      } catch (error) {
        console.error('Error al obtener las membresías', error);
      }
    };

    fetchMembresias();
  }, []);

  return (
    <div className="container">
      <button
        onClick={() => navigate('/')}
        className="back-button"
      >
        Volver al Inicio
      </button>
      <h2>Lista de Membresías</h2>

      {membresias.length === 0 ? (
        <p>No hay membresías registradas.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Duración</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {membresias.map((membresia, index) => (
              <tr key={index}>
                <td>{membresia.nombre}</td>
                <td>{membresia.descripcion}</td>
                <td>{membresia.duracion}</td>
                <td>{membresia.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
