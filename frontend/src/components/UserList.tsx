import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';
import type { UserData } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function UserList() {
  const [usuarios, setUsuarios] = useState<UserData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers()
      .then(setUsuarios)
      .catch(error => console.error('Error al obtener usuarios:', error));
  }, []);

  return (
    <div className="container">
      <button
        onClick={() => navigate('/')}
        className="back-button"
      >
        Volver al Inicio
      </button>
      <h2>Lista de Usuarios</h2>

      {usuarios.length === 0 ? (
        <p>No hay usuarios registrados.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Cédula</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
              <th>Domicilio</th>
              <th>Membresía</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user, index) => (
              <tr key={index}>
                <td>{user.identificador}-{user.cedula}</td>
                <td>{user.nombre}</td>
                <td>{user.apellido}</td>
                <td>{user.edad}</td>
                <td>{user.domicilio}</td>
                <td>{user.membresia?.nombre ?? 'Sin membresía'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
