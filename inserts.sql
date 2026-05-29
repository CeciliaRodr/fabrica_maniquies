USE empresa_maniquies;

INSERT INTO materiales (nombre) VALUES
('Plástico'), --1
('Fibra de vidrio'), --2
('Madera'); --3

INSERT INTO generos (nombre) VALUES
('Masculino'), --1
('Femenino'); --2

INSERT INTO talles (nombre) VALUES
('NIÑO'), --1
('ADULTO'); --2

INSERT INTO colores (nombre) VALUES
('Blanco'), --1
('Negro'), --2
('Nude'), --3
('Natural'); --4

INSERT INTO pelucas (id_color, largo, stock) VALUES
(1, 'Pixie', 20),
(1, 'Long bob', 15),
(2, 'Pixie', 10),
(2, 'Long bob', 15),
(3, 'Pixie', 12),
(3, 'Long bob', 25),
(4, 'Pixie', 15),
(4, 'Long bob', 8);

INSERT INTO cabezas (id_material, id_genero, id_talle, id_color, id_peluca, stock) VALUES
(2, 1, 2, 1, 1, 15), -- Fibra, Masc, Adulto, Blanco, Pixie, 15u
(3, 2, 2, 2, 4, 10), -- Madera, Fem, Adulto, Negro, Long Bob, 10u
(1, 1, 1, 3, 5, 20), -- Plástico, Masc, Niño, Nude, Pixie, 20u
(2, 2, 2, 4, 8, 15), -- Fibra, Fem, Adulto, Natural, Long Bob, 15u
(3, 1, 1, 1, 1, 12), -- Madera, Masc, Niño, Blanco, Pixie, 12u
(1, 2, 2, 2, 4, 8),  -- Plástico, Fem, Adulto, Negro, Long Bob, 8u
(2, 1, 1, 3, 5, 10), -- Fibra, Masc, Niño, Nude, Pixie, 10u
(3, 2, 2, 4, 8, 15), -- Madera, Fem, Adulto, Natural, Long Bob, 15u
(1, 1, 1, 1, 1, 20), -- Plástico, Masc, Niño, Blanco, Pixie, 20u
(2, 2, 2, 2, 4, 10); -- Fibra, Fem, Adulto, Negro, Long Bob, 10u

INSERT INTO torsos (id_material, id_genero, id_talle, id_color, stock) VALUES
(1, 1, 1, 1, 12), --plástico, masculino, niño, blanco, corto, cant
(2, 2, 3, 2, 8), --fibra de vidrio, femenino, adulto, negro, largo, cant
(3, 1, 1, 4, 10), --madera, masculino, niño, natural, corto, cant
(1, 2, 2, 3, 15), --plástico, femenino, adulto, nude, largo, cant
(2, 1, 1, 2, 12), --fibra de vidrio, masculino, niño, negro, corto, cant
(3, 2, 2, 4, 8), --madera, femenino, adulto, natural, largo, cant
(1, 1, 1, 1, 20), --plástico, masculino, niño, blanco, corto, cant
(2, 2, 2, 2, 15), --fibra de vidrio, femenino, adulto, negro, largo, cant
(3, 1, 1, 4, 10), --madera, masculino, niño, natural, corto, cant
(1, 2, 2, 3, 15); --plástico, femenino, adulto, nude, largo, cant

INSERT INTO brazos_izq (id_material, id_genero, id_talle, id_color, stock) VALUES
(1, 1, 1, 1, 20), --plástico, masculino, niño, blanco, corto, cant
(2, 2, 2, 2, 15), --fibra de vidrio, femenino, adulto, negro, largo, cant
(3, 1, 1, 4, 10), --madera, masculino, niño, natural, corto, cant
(1, 2, 2, 4, 15), --plástico, femenino, adulto, natural, largo, cant
(2, 1, 1, 2, 12), --fibra de vidrio, masculino, niño, negro, corto, cant
(3, 2, 2, 4, 8), --madera, femenino, adulto, natural, largo, cant
(1, 1, 1, 1, 20), --plástico, masculino, niño, blanco, corto, cant
(2, 2, 2, 2, 15), --fibra de vidrio, femenino, adulto, negro, largo, cant
(3, 1, 1, 4, 10), --madera, masculino, niño, natural, corto, cant
(1, 2, 2, 3, 15); --plástico, femenino, adulto, nude, largo, cant

INSERT INTO brazos_der (id_material, id_genero, id_talle, id_color, stock) VALUES
(1, 1, 1, 1, 20), --plástico, masculino, niño, blanco, corto, cant
(2, 2, 2, 2, 15), --fibra de vidrio, femenino, adulto, negro, largo, cant
(3, 1, 1, 4, 10), --madera, masculino, niño, natural, corto, cant
(1, 2, 2, 4, 15), --plástico, femenino, adulto, natural, largo, cant
(2, 1, 1, 2, 12), --fibra de vidrio, masculino, niño, negro, corto, cant
(3, 2, 2, 4, 8), --madera, femenino, adulto, natural, largo,
(1, 2, 1, 4, 12), --plástico, femenino, niño, natural, corto, cant
(2, 2, 2, 2, 15), --fibra de vidrio, femenino, adulto, negro, largo, cant
(3, 1, 1, 4, 10), --madera, masculino, niño, natural, corto, cant
(1, 2, 2, 3, 15); --plástico, femenino, adulto, nude, largo, cant

INSERT INTO piernas_izq (id_material, id_genero, id_talle, id_color, stock) VALUES
(1, 1, 1, 1, 20), --plástico, masculino, niño, blanco, corto, cant
(2, 2, 2, 2, 15), --fibra de vidrio, femenino, adulto, negro, largo, cant
(3, 1, 1, 4, 10), --madera, masculino, niño, natural, corto, cant
(1, 2, 2, 4, 15), --plástico, femenino, adulto, natural, largo, cant
(2, 1, 1, 2, 12), --fibra de vidrio, masculino, niño, negro, corto, cant
(3, 2, 2, 4, 8), --madera, femenino, adulto, natural, largo,
(1, 2, 1, 4, 12), --plástico, femenino, niño, natural, corto, cant
(2, 2, 2, 2, 15), --fibra de vidrio, femenino, adulto, negro, largo, cant
(3, 1, 1, 4, 10), --madera, masculino, niño, natural, corto, cant
(1, 2, 2, 3, 15); --plástico, femenino, adulto, nude, largo, cant

INSERT INTO piernas_der (id_material, id_genero, id_talle, id_color, stock) VALUES
(1, 1, 1, 1, 20), --plástico, masculino, niño, blanco, corto, cant
(2, 2, 2, 2, 15), --fibra de vidrio, femenino, adulto, negro, largo, cant
(3, 1, 1, 4, 10), --madera, masculino, niño, natural, corto, cant
(1, 2, 2, 4, 15), --plástico, femenino, adulto, natural, largo, cant
(2, 1, 1, 2, 12), --fibra de vidrio, masculino, niño, negro, corto, cant
(3, 2, 2, 4, 8), --madera, femenino, adulto, natural, largo,
(1, 2, 1, 4, 12), --plástico, femenino, niño, natural, corto, cant
(2, 2, 2, 2, 15), --fibra de vidrio, femenino, adulto, negro, largo, cant
(3, 1, 1, 4, 10), --madera, masculino, niño, natural, corto, cant
(1, 2, 2, 3, 15); --plástico, femenino, adulto, nude, largo, cant


-- Ensamblo 
INSERT INTO maniquies (id_cabeza, id_torso, id_pierna_izq, id_pierna_der, id_brazo_izq, id_brazo_der, stock, precio) VALUES
(1, 1, 1, 1, 1, 1, 5, 15000.50),
(2, 2, 2, 2, 2, 2, 3, 18000.75),
(3, 3, 3, 3, 3, 3, 2, 20000.00),
(4, 4, 4, 4, 4, 4, 1, 25000.00),
(5, 5, 5, 5, 5, 5, 1, 30000.00);

INSERT INTO clientes (dni_cliente, nombre, telefono) VALUES
(11111111,'Juan García', '1122334455'),
(22222222,'Maria Pérez', '2233445566'),
(33333333,'Local Centro', '3344556677'),
(44444444,'Francisco López', '4455667788'),
(55555555,'Ana Martínez', '5566778899'),
(66666666,'Luisa Gómez', '6677889900');

INSERT INTO ventas (dni_cliente, id_maniqui, cantidad, fecha) VALUES
(11111111, 1, 2, '2026-04-23'),
(22222222, 2, 1, '2026-04-24'),
(33333333, 3, 1, '2026-04-25'),
(44444444, 4, 1, '2026-04-26'),
(55555555, 5, 1, '2026-04-27'),
(33333333, 1, 1, '2026-04-28');
