import { useState, useEffect } from 'react';
import { createUser } from '../services/api';
import { useNavigate } from 'react-router-dom'; // 🧭 Importa el hook para navegación

interface UserFormData {
  identificador: string;
  cedula: string;
  nombre: string;
  apellido: string;
  edad: string;
  domicilio: string;
  numeroPago: string;
  membresia: {
    id: number;
  };
}

export default function UserForm() {
  const [formData, setFormData] = useState<UserFormData>({
    identificador: 'V',
    cedula: '',
    nombre: '',
    apellido: '',
    edad: '',
    domicilio: '',
    numeroPago: '',
    membresia: {
      id: 0,
    },
  });

  const [membresias, setMembresias] = useState<any[]>([]);
  const navigate = useNavigate(); // 🧭 Instancia de navegación

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUser(formData);
      alert('¡Usuario registrado con éxito!');
      setFormData({
        identificador: 'V',
        cedula: '',
        nombre: '',
        apellido: '',
        edad: '',
        domicilio: '',
        numeroPago: '',
        membresia: { id: 0 },
      });
    } catch (error) {
      console.error('Error al guardar:', error);
      alert('Error al registrar el usuario');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'id_membresia') {
      setFormData(prev => ({ ...prev, membresia: { id: Number(value) } }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="form-container">
      <h2>Registrar Nuevo Usuario</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Cédula:</label>
          <div className="input-group">
            <select
              name="identificador"
              value={formData.identificador}
              onChange={handleChange}
              required
              className="form-input small"
            >
              <option value="V">V</option>
              <option value="E">E</option>
              <option value="P">P</option>
            </select>
            <input
              type="number"
              name="cedula"
              value={formData.cedula}
              onChange={handleChange}
              required
              className="form-input flex-grow"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Apellido:</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Edad:</label>
          <input
            type="number"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            required
            min="18"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Domicilio:</label>
          <input
            type="text"
            name="domicilio"
            value={formData.domicilio}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Número de Pago:</label>
          <input
            type="number"
            name="numeroPago"
            value={formData.numeroPago}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Membresía:</label>
          <select
            name="id_membresia"
            value={formData.membresia.id}
            onChange={handleChange}
            required
            className="form-input"
          >
            <option value={0} disabled>Selecciona una Membresía</option>
            {membresias.map((membresia: any) => (
              <option key={membresia.id} value={membresia.id}>
                {membresia.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="form-buttons">
          <button type="submit" className="main-button green">
            Registrar Usuario
          </button>

          <button
            onClick={() => navigate('/')}
            type="button"
            className="main-button"
          >
            Volver al Inicio
          </button>
        </div>
      </form>
    </div>
  );
}
