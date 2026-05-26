const express = require('express');
const router = express.Router();

const { clientes } = require('../app');

router.get('/', (req, res) => {
    res.json(clientes);
});

router.get('/:dni', (req, res) => {
    const dni = parseInt(req.params.dni);
    const cliente = clientes.find(c => c.dni_cliente === dni);

    if (!cliente) {
        return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    res.json(cliente);
});

router.post('/', (req, res) => {
    const { dni_cliente, nombre, telefono } = req.body;

    const nuevoCliente = {
        dni_cliente: parseInt(dni_cliente),
        nombre: nombre,
        telefono: telefono
    };

    clientes.push(nuevoCliente);
    res.status(201).json({ mensaje: 'Se ha creado un nuevo cliente', cliente: nuevoCliente });
});

router.delete('/:dni', (req, res) => {
    const dni = parseInt(req.params.dni);
    const index = clientes.findIndex(c => c.dni_cliente === dni);

    if (index === -1) {
        return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    clientes.splice(index, 1);
    res.json({ mensaje: 'Cliente eliminado correctamente' });


router.patch('/:dni', (req, res) => {
    const dniBuscado = parseInt(req.params.dni);
    const cliente = clientes.find(c => c.dni_cliente === dniBuscado);

    if (!cliente) {
        return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    const { nombre, telefono } = req.body;

    if (nombre) {
        cliente.nombre = nombre;
    }
    
    if (telefono) {
        cliente.telefono = telefono;
    }

    res.json({ mensaje: 'Cliente actualizado con éxito', cliente });
}); 
});

module.exports = router;