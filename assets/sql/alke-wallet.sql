
-- Creación de tablas de datos

create table USUARIO (
id_usuario VARCHAR(255),
    nombre VARCHAR(60),
    correo_electronico VARCHAR(50),
    contrasena VARCHAR(30),
    saldo  INT,
    PRIMARY KEY (id_usuario)
);

create table MONEDA (
id_moneda VARCHAR(255),
nombre_moneda VARCHAR(255),
simbolo_moneda VARCHAR(255),
PRIMARY KEY (id_moneda)
 );
 
 

create table TRANSACCION (
id_transaccion INT,
id_emisor VARCHAR(255),
id_receptor VARCHAR(255),
id_moneda VARCHAR(255),
monto VARCHAR (50),
fecha VARCHAR (20),
PRIMARY KEY (id_transaccion),
FOREIGN KEY (id_emisor) REFERENCES USUARIO (id_usuario),
FOREIGN KEY (id_receptor) REFERENCES USUARIO (id_usuario),
FOREIGN KEY (id_moneda) REFERENCES MONEDA (id_moneda)
);

INSERT INTO USUARIO (id_usuario,  nombre, correo_electronico, contrasena, saldo) VALUES
('1', 'Ana Garcia', 'ana.garcia@email.com', '123456', 100000),
('2', 'Pedro Lopez', 'pedro.lopez@email.com', 'abcdef', 200000),
('3', 'Maria Perez', 'maria.perez@email.com', 'ghijkl', 300000),
('4', 'Juan Martinez', 'juan.martinez@email.com', 'mnopqr', 400000),
('5', 'Sofia Gonzalez', 'sofia.gonzalez@email.com', 'stuvwxy', 500000),
('6', 'Diego Rodriguez', 'diego.rodriguez@email.com', '1234567890', 600000),
('7', 'Camila Fernandez', 'camila.fernandez@email.com', 'abcdefghijkl', 700000),
('8', 'Matias Diaz', 'matias.diaz@email.com', 'mnopqrstuvwxy', 800000),
('9', 'Valentina Silva', 'valentina.silva@email.com', '1234567890abcdef', 900000),
('10', 'Nicolas Castro', 'nicolas.castro@email.com', 'ghijklmnñopqrstuvwxy', 1000000);

INSERT INTO MONEDA (id_moneda, nombre_moneda, simbolo_moneda) VALUES
('CLP', 'Peso chileno', '$'),
('USD', 'Dólar estadounidense', '$USD'),
('EUR', 'Euro', '€');

INSERT INTO TRANSACCION (id_transaccion, id_emisor, id_receptor, id_moneda, monto, fecha) VALUES

(1, 1, 2, 'CLP', 10000, '2024-04-09'),
(2, 2, 3, 'USD', 200, '2024-04-08'),
(3, 3, 4, 'EUR', 300, '2024-04-07'),
(4, 4, 5, 'CLP', 40000, '2024-04-06'),
(5, 5, 6, 'USD', 500, '2024-04-05'),
(6, 6, 7, 'EUR', 600, '2024-04-04'),
(7, 7, 8, 'CLP', 70000, '2024-04-03'),
(8, 8, 9, 'USD', 800, '2024-04-02'),
(9, 9, 10, 'EUR', 900, '2024-04-01'),
(10, 10, 1, 'CLP', 100000, '2024-03-31');


-- Consulta para obtener el nombre de la moneda elegida por un usuario específico

SELECT *
FROM USUARIO;

SELECT u.nombre AS NOMBRE_USUARIO, nombre_moneda AS NOMBRE_MONEDA, simbolo_moneda AS SIMBOLO_MONEDA -- Lo que quiero mostrar en el título de las tablas 
FROM USUARIO u -- Desde que tabla
JOIN TRANSACCION t ON u.id_usuario = t.id_emisor -- conecta las otras tablas
JOIN MONEDA m ON t.id_moneda = m.id_moneda
WHERE u.nombre = 'Pedro Lopez'; -- Como quiero conectarlo, eligiendo un parámetro

-- Consulta para obtener todas las transacciones registradas


SELECT *
FROM TRANSACCION;

-- Consulta para obtener todas las transacciones realizadas por un usuario específico

SELECT *
FROM TRANSACCION
WHERE id_emisor = 1;

-- Sentencia DML para modificar el campo correo electrónico de un usuario específico

SELECT *
FROM USUARIO;

UPDATE USUARIO
SET correo_electronico = 'anagarcia.nuevo@hotmail.com'
WHERE id_usuario = '1';

-- Sentencia para eliminar los datos de una transacción (eliminado de la fila completa)

SELECT *
FROM TRANSACCION;

DELETE FROM TRANSACCION
WHERE id_transaccion = 1; 





