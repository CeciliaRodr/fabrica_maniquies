CREATE DATABASE IF NOT EXISTS empresa_maniquies;
USE empresa_maniquies;

CREATE TABLE materiales (
    id_material INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL
    );

CREATE TABLE generos (
    id_genero INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL
    );

CREATE TABLE talles (
    id_talle INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(2) NOT NULL
    );

CREATE TABLE colores (
    id_color INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL
    );

CREATE TABLE pelucas (
    id_peluca INT AUTO_INCREMENT PRIMARY KEY,
    id_color INT NOT NULL,
    largo VARCHAR(20) NOT NULL,
    stock INT NOT NULL,
    FOREIGN KEY (id_color) REFERENCES colores(id_color)
    );

CREATE TABLE cabezas (
    id_cabeza INT AUTO_INCREMENT PRIMARY KEY,
    id_material INT NOT NULL,
    id_genero INT NOT NULL,
    id_talle INT NOT NULL,
    id_color INT NOT NULL,
    stock INT NOT NULL,
    FOREIGN KEY (id_material) REFERENCES materiales(id_material),
    FOREIGN KEY (id_genero) REFERENCES generos(id_genero),
    FOREIGN KEY (id_talle) REFERENCES talles(id_talle),
    FOREIGN KEY (id_color) REFERENCES colores(id_color)
    );

CREATE TABLE torsos (
    id_torso INT AUTO_INCREMENT PRIMARY KEY,
    id_material INT NOT NULL,
    id_genero INT NOT NULL,
    id_talle INT NOT NULL,
    id_color INT NOT NULL,
    stock INT NOT NULL,
    FOREIGN KEY (id_material) REFERENCES materiales(id_material),
    FOREIGN KEY (id_genero) REFERENCES generos(id_genero),
    FOREIGN KEY (id_talle) REFERENCES talles(id_talle),
    FOREIGN KEY (id_color) REFERENCES colores(id_color)
    );

CREATE TABLE piernas_izq (
    id_pierna_izq INT AUTO_INCREMENT PRIMARY KEY,
    id_material INT NOT NULL,
    id_genero INT NOT NULL,
    id_talle INT NOT NULL,
    id_color INT NOT NULL,
    stock INT NOT NULL,
    FOREIGN KEY (id_material) REFERENCES materiales(id_material),
    FOREIGN KEY (id_genero) REFERENCES generos(id_genero),
    FOREIGN KEY (id_talle) REFERENCES talles(id_talle),
    FOREIGN KEY (id_color) REFERENCES colores(id_color)
    );

CREATE TABLE piernas_der (
    id_pierna_der INT AUTO_INCREMENT PRIMARY KEY,
    id_material INT NOT NULL,
    id_genero INT NOT NULL,
    id_talle INT NOT NULL,
    id_color INT NOT NULL,
    stock INT NOT NULL,
    FOREIGN KEY (id_material) REFERENCES materiales(id_material),
    FOREIGN KEY (id_genero) REFERENCES generos(id_genero),
    FOREIGN KEY (id_talle) REFERENCES talles(id_talle),
    FOREIGN KEY (id_color) REFERENCES colores(id_color)
    );

CREATE TABLE brazos_izq (
    id_brazo_izq INT AUTO_INCREMENT PRIMARY KEY,
    id_material INT NOT NULL,
    id_genero INT NOT NULL,
    id_talle INT NOT NULL,
    id_color INT NOT NULL,      
    stock INT NOT NULL,
    FOREIGN KEY (id_material) REFERENCES materiales(id_material),
    FOREIGN KEY (id_genero) REFERENCES generos(id_genero),
    FOREIGN KEY (id_talle) REFERENCES talles(id_talle),
    FOREIGN KEY (id_color) REFERENCES colores(id_color)
    );

CREATE TABLE brazos_der (
    id_brazo_der INT AUTO_INCREMENT PRIMARY KEY,
    id_material INT NOT NULL,
    id_genero INT NOT NULL,
    id_talle INT NOT NULL,
    id_color INT NOT NULL,      
    stock INT NOT NULL,
    FOREIGN KEY (id_material) REFERENCES materiales(id_material),
    FOREIGN KEY (id_genero) REFERENCES generos(id_genero),
    FOREIGN KEY (id_talle) REFERENCES talles(id_talle),
    FOREIGN KEY (id_color) REFERENCES colores(id_color)
    );

CREATE TABLE maniquies (
    id_maniqui INT AUTO_INCREMENT PRIMARY KEY,  
    id_cabeza INT NOT NULL,
    id_torso INT NOT NULL,  
    id_pierna_izq INT NOT NULL,
    id_pierna_der INT NOT NULL,
    id_brazo_izq INT NOT NULL,
    id_brazo_der INT NOT NULL,
    stock INT NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_cabeza) REFERENCES cabezas(id_cabeza),
    FOREIGN KEY (id_torso) REFERENCES torsos(id_torso),
    FOREIGN KEY (id_pierna_izq) REFERENCES piernas_izq (id_pierna_izq),
    FOREIGN KEY (id_pierna_der) REFERENCES piernas_der (id_pierna_der),
    FOREIGN KEY (id_brazo_izq) REFERENCES brazos_izq (id_brazo_izq),
    FOREIGN KEY (id_brazo_der) REFERENCES brazos_der (id_brazo_der)
    );

CREATE TABLE clientes (
    dni_cliente VARCHAR(20) PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    telefono INT NOT NULL
    );

CREATE TABLE ventas (
    id_venta INT AUTO_INCREMENT PRIMARY KEY,
    dni_cliente VARCHAR(20) NOT NULL,
    id_maniqui INT NOT NULL,
    cantidad INT NOT NULL,
    fecha DATE NOT NULL,
    FOREIGN KEY (dni_cliente) REFERENCES clientes(dni_cliente),
    FOREIGN KEY (id_maniqui) REFERENCES maniquies(id_maniqui)
    );

