const API_URL_MEMBRESIAS = 'http://localhost:8080/api/membresias';
const API_URL_USUARIOS = 'http://localhost:8080/api/usuarios';

export interface MembershipData {
  nombre: string;
  descripcion: string;
  duracion: string;
  precio: string;
}

export interface UserData {
  id?: number; 
  identificador: string;
  cedula: string;
  nombre: string;
  apellido: string;
  edad: string;
  domicilio: string;
  numeroPago: string;
  membresia: {
    id: number;
    nombre?: string;
  };
}


export const createMembership = async (data: MembershipData): Promise<any> => {
  const response = await fetch(API_URL_MEMBRESIAS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Error al guardar la membresía');
  }

  return response.json();
};

export const fetchMembresias = async (): Promise<MembershipData[]> => {
  const response = await fetch(API_URL_MEMBRESIAS);
  if (!response.ok) {
    throw new Error('Error al obtener las membresías');
  }
  return response.json();
};

export const createUser = async (data: UserData): Promise<any> => {
  const response = await fetch(API_URL_USUARIOS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Error al guardar el usuario');
  }

  return response.json();
};

export const fetchUsers = async (): Promise<UserData[]> => {
  const response = await fetch(API_URL_USUARIOS);
  if (!response.ok) {
    throw new Error('Error al obtener los usuarios');
  }
  return response.json();
};
