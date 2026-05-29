const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let materiales = [
    { id: 1, nombre: 'Plástico' },
    { id: 2, nombre: 'Fibra de vidrio' },
    { id: 3, nombre: 'Madera' }
];

let generos = [
    { id: 1, nombre: 'Masculino' },
    { id: 2, nombre: 'Femenino' }
];

let talles = [
    { id: 1, nombre: 'NIÑO' },
    { id: 2, nombre: 'ADULTO' }
];

let colores = [
    { id: 1, nombre: 'Blanco' },
    { id: 2, nombre: 'Negro' },
    { id: 3, nombre: 'Nude' },
    { id: 4, nombre: 'Natural' }
];

let pelucas = [
    { id: 1, id_color: 1, largo: 'Pixie', stock: 20 },
    { id: 2, id_color: 1, largo: 'Long bob', stock: 15 },
    { id: 3, id_color: 2, largo: 'Pixie', stock: 10 },
    { id: 4, id_color: 2, largo: 'Long bob', stock: 15 },
    { id: 5, id_color: 3, largo: 'Pixie', stock: 12 },
    { id: 6, id_color: 3, largo: 'Long bob', stock: 25 },
    { id: 7, id_color: 4, largo: 'Pixie', stock: 15 },
    { id: 8, id_color: 4, largo: 'Long bob', stock: 8 }
];

let cabezas = [
    { id_cabeza: 1, id_material: 2, id_genero: 1, id_talle: 2, id_color: 1, id_peluca: 1, stock: 15 },
    { id_cabeza: 2, id_material: 3, id_genero: 2, id_talle: 2, id_color: 2, id_peluca: 4, stock: 10 },
    { id_cabeza: 3, id_material: 1, id_genero: 1, id_talle: 1, id_color: 3, id_peluca: 5, stock: 20 },
    { id_cabeza: 4, id_material: 2, id_genero: 2, id_talle: 2, id_color: 4, id_peluca: 8, stock: 15 },
    { id_cabeza: 5, id_material: 3, id_genero: 1, id_talle: 1, id_color: 1, id_peluca: 1, stock: 12 }
];

let torsos = [
    { id_torso: 1, id_material: 1, id_genero: 1, id_talle: 1, id_color: 1, stock: 12 },
    { id_torso: 2, id_material: 2, id_genero: 2, id_talle: 2, id_color: 2, stock: 8 },
    { id_torso: 3, id_material: 3, id_genero: 1, id_talle: 1, id_color: 4, stock: 10 },
    { id_torso: 4, id_material: 1, id_genero: 2, id_talle: 2, id_color: 3, stock: 15 },
    { id_torso: 5, id_material: 2, id_genero: 1, id_talle: 1, id_color: 2, stock: 12 }
];

let brazos_izq = [
    { id_brazo_izq: 1, id_material: 1, id_genero: 1, id_talle: 1, id_color: 1, stock: 20 },
    { id_brazo_izq: 2, id_material: 2, id_genero: 2, id_talle: 2, id_color: 2, stock: 15 },
    { id_brazo_izq: 3, id_material: 3, id_genero: 1, id_talle: 1, id_color: 4, stock: 10 },
    { id_brazo_izq: 4, id_material: 1, id_genero: 2, id_talle: 2, id_color: 4, stock: 15 },
    { id_brazo_izq: 5, id_material: 2, id_genero: 1, id_talle: 1, id_color: 2, stock: 12 }
];

let brazos_der = [
    { id_brazo_der: 1, id_material: 1, id_genero: 1, id_talle: 1, id_color: 1, stock: 20 },
    { id_brazo_der: 2, id_material: 2, id_genero: 2, id_talle: 2, id_color: 2, stock: 15 },
    { id_brazo_der: 3, id_material: 3, id_genero: 1, id_talle: 1, id_color: 4, stock: 10 },
    { id_brazo_der: 4, id_material: 1, id_genero: 2, id_talle: 2, id_color: 4, stock: 15 },
    { id_brazo_der: 5, id_material: 2, id_genero: 1, id_talle: 1, id_color: 2, stock: 12 }
];

let piernas_izq = [
    { id_pierna_izq: 1, id_material: 1, id_genero: 1, id_talle: 1, id_color: 1, stock: 20 },
    { id_pierna_izq: 2, id_material: 2, id_genero: 2, id_talle: 2, id_color: 2, stock: 15 },
    { id_pierna_izq: 3, id_material: 3, id_genero: 1, id_talle: 1, id_color: 4, stock: 10 },
    { id_pierna_izq: 4, id_material: 1, id_genero: 2, id_talle: 2, id_color: 4, stock: 15 },
    { id_pierna_izq: 5, id_material: 2, id_genero: 1, id_talle: 1, id_color: 2, stock: 12 }
];

let piernas_der = [
    { id_pierna_der: 1, id_material: 1, id_genero: 1, id_talle: 1, id_color: 1, stock: 20 },
    { id_pierna_der: 2, id_material: 2, id_genero: 2, id_talle: 2, id_color: 2, stock: 15 },
    { id_pierna_der: 3, id_material: 3, id_genero: 1, id_talle: 1, id_color: 4, stock: 10 },
    { id_pierna_der: 4, id_material: 1, id_genero: 2, id_talle: 2, id_color: 4, stock: 15 },
    { id_pierna_der: 5, id_material: 2, id_genero: 1, id_talle: 1, id_color: 2, stock: 12 }
];

let maniquies = [
    { id_maniqui: 1, id_cabeza: 1, id_torso: 1, id_pierna_izq: 1, id_pierna_der: 1, id_brazo_izq: 1, id_brazo_der: 1, stock: 5, precio: 15000.50 },
    { id_maniqui: 2, id_cabeza: 2, id_torso: 2, id_pierna_izq: 2, id_pierna_der: 2, id_brazo_izq: 2, id_brazo_der: 2, stock: 3, precio: 18000.75 },
    { id_maniqui: 3, id_cabeza: 3, id_torso: 3, id_pierna_izq: 3, id_pierna_der: 3, id_brazo_izq: 3, id_brazo_der: 3, stock: 2, precio: 20000.00 },
    { id_maniqui: 4, id_cabeza: 4, id_torso: 4, id_pierna_izq: 4, id_pierna_der: 4, id_brazo_izq: 4, id_brazo_der: 4, stock: 1, precio: 25000.00 },
    { id_maniqui: 5, id_cabeza: 5, id_torso: 5, id_pierna_izq: 5, id_pierna_der: 5, id_brazo_izq: 5, id_brazo_der: 5, stock: 1, precio: 30000.00 }
];

let clientes = [
    { dni_cliente: 11111111, nombre: 'Juan García', telefono: '1122334455' },
    { dni_cliente: 22222222, nombre: 'Maria Pérez', telefono: '2233445566' },
    { dni_cliente: 33333333, nombre: 'Local Centro', telefono: '3344556677' },
    { dni_cliente: 44444444, nombre: 'Francisco López', telefono: '4455667788' },
    { dni_cliente: 55555555, nombre: 'Ana Martínez', telefono: '5566778899' },
    { dni_cliente: 66666666, nombre: 'Luisa Gómez', telefono: '6677889900' }
];

let ventas = [
    { id_venta: 1, dni_cliente: 11111111, id_maniqui: 1, cantidad: 2, fecha: '2026-04-23' },
    { id_venta: 2, dni_cliente: 22222222, id_maniqui: 2, cantidad: 1, fecha: '2026-04-24' },
    { id_venta: 3, dni_cliente: 33333333, id_maniqui: 3, cantidad: 1, fecha: '2026-04-25' },
    { id_venta: 4, dni_cliente: 44444444, id_maniqui: 4, cantidad: 1, fecha: '2026-04-26' },
    { id_venta: 5, dni_cliente: 55555555, id_maniqui: 5, cantidad: 1, fecha: '2026-04-27' },
    { id_venta: 6, dni_cliente: 33333333, id_maniqui: 1, cantidad: 1, fecha: '2026-04-28' }
];

module.exports = { maniquies, clientes, ventas };

const routesManiquies = require('./routes/maniquies');
app.use('/api/maniquies', routesManiquies);   

const routesClientes = require('./routes/clientes');
app.use('/api/clientes', routesClientes);

const routesVentas = require('./routes/ventas');
app.use('/api/ventas', routesVentas);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

