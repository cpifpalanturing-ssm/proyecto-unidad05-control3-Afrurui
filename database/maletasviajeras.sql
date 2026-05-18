DROP DATABASE IF EXISTS MaletasViajeras;
CREATE DATABASE MaletasViajeras;
USE MaletasViajeras;

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE viajes (
    id_viaje INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    titulo VARCHAR(150) NOT NULL,
    descripcion TEXT,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    presupuesto DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE destinos (
    id_destino INT AUTO_INCREMENT PRIMARY KEY,
    id_viaje INT NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    pais VARCHAR(100) NOT NULL,
    fecha_llegada DATE NOT NULL,
    fecha_salida DATE NOT NULL,
    FOREIGN KEY (id_viaje) REFERENCES viajes(id_viaje)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE actividades (
    id_actividad INT AUTO_INCREMENT PRIMARY KEY,
    id_destino INT NOT NULL,
    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT,
    fecha_actividad DATE NOT NULL,
    coste DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_destino) REFERENCES destinos(id_destino)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

INSERT INTO usuarios (nombre, email) VALUES
('Ana Balboa López', 'ana@ejemplo.com'),
('Pedro Martín Pérez', 'pedro@ejemplo.com');

INSERT INTO viajes (id_usuario, titulo, descripcion, fecha_inicio, fecha_fin, presupuesto) VALUES
(1, 'Viaje a Italia', 'Recorrido por varias ciudades italianas durante las vacaciones de verano.', '2025-08-10', '2025-08-18', 900.00),
(1, 'Escapada a París', 'Viaje corto para visitar monumentos y museos principales.', '2025-07-05', '2025-07-09', 650.00),
(2, 'Fin de semana en Madrid', 'Viaje breve para conocer la ciudad y disfrutar de su oferta cultural.', '2025-06-21', '2025-06-23', 300.00);

INSERT INTO destinos (id_viaje, ciudad, pais, fecha_llegada, fecha_salida) VALUES
(1, 'Roma', 'Italia', '2025-07-10', '2025-07-13'),
(1, 'Florencia', 'Italia', '2025-07-13', '2025-07-16'),
(1, 'Venecia', 'Italia', '2025-07-16', '2025-07-18'),
(2, 'París', 'Francia', '2025-08-05', '2025-08-09'),
(3, 'Madrid', 'España', '2025-06-21', '2025-06-23');

INSERT INTO actividades (id_destino, nombre, descripcion, fecha_actividad, coste) VALUES
(1, 'Visita al Coliseo', 'Entrada al Coliseo y recorrido por la zona arqueológica.', '2025-07-11', 18.00),
(1, 'Cena en Trastevere', 'Cena en un restaurante típico del barrio de Trastevere.', '2025-07-12', 25.50),
(2, 'Museo Uffizi', 'Visita cultural al museo Uffizi.', '2025-07-14', 20.00),
(2, 'Paseo por el centro histórico', 'Ruta a pie por la catedral y plazas principales.', '2025-07-15', 0.00),
(3, 'Paseo en góndola', 'Recorrido turístico en góndola por los canales.', '2025-07-17', 35.00),
(4, 'Visita a la Torre Eiffel', 'Subida a la Torre Eiffel con entrada reservada.', '2025-08-06', 29.90),
(4, 'Museo del Louvre', 'Entrada general al museo del Louvre.', '2025-08-07', 17.00),
(5, 'Museo del Prado', 'Visita al museo y colección principal.', '2025-06-21', 15.00),
(5, 'Cena en el centro', 'Cena en restaurante cercano a la Plaza Mayor.', '2025-06-22', 22.00);
