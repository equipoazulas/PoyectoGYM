import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { createMembership } from '../services/api'; 
import { useNavigate } from 'react-router-dom'; 

interface FormData {
  nombre: string;
  descripcion: string;
  duracion: string;
  precio: string;
}

export default function MembershipForm() {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    descripcion: '',
    duracion: '1 mes',
    precio: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createMembership(formData);
      alert('¡Membresía guardada con éxito!');
      setFormData({
        nombre: '',
        descripcion: '',
        duracion: '1 mes',
        precio: ''
      });
    } catch (error) {
      console.error('Error al guardar:', error);
      alert('Error al guardar la membresía');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-container">
      <h2>Agregar Nueva Membresía</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Duración:</label>
          <select
            name="duracion"
            value={formData.duracion}
            onChange={handleChange}
          >
            <option value="1 mes">1 mes</option>
            <option value="3 meses">3 meses</option>
            <option value="6 meses">6 meses</option>
          </select>
        </div>

        <div className="form-group">
          <label>Precio ($):</label>
          <input
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="main-button green">
            Guardar Membresía
          </button>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="main-button"
          >
            Volver al Inicio
          </button>
        </div>
      </form>
    </div>
  );
}
