CREATE TABLE membresias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE NOT NULL,
    descripcion TEXT,
    duracion VARCHAR(50) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    identificador VARCHAR(5) NOT NULL,
    cedula INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    edad INT NOT NULL,
    domicilio VARCHAR(255),
    numero_pago VARCHAR(50) NOT NULL,
    id_membresia INT NOT NULL,
    FOREIGN KEY (id_membresia) REFERENCES membresias(id)
);

ALTER TABLE usuarios DROP INDEX cedula;
ALTER TABLE usuarios ADD UNIQUE (identificador, cedula);
