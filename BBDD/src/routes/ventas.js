const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const baseDeDatos = require('../app');
    res.json(baseDeDatos.ventas);
});

router.post('/', (req, res) => {
    const baseDeDatos = require('../app');
    const { dni_cliente, id_maniqui, cantidad } = req.body;

    const maniquiEncontrado = baseDeDatos.maniquies.find(m => m.id_maniqui === parseInt(id_maniqui));

    if (!maniquiEncontrado) {
        return res.status(404).json({ error: 'El maniquí seleccionado no existe' });
    }

    if (maniquiEncontrado.stock < parseInt(cantidad)) {
        return res.status(400).json({ error: `Stock insuficiente. Disponibles: ${maniquiEncontrado.stock}` });
    }

    maniquiEncontrado.stock -= parseInt(cantidad);

    const nuevaVenta = {
        id_venta: baseDeDatos.ventas.length + 1,
        dni_cliente: parseInt(dni_cliente),
        id_maniqui: parseInt(id_maniqui),
        cantidad: parseInt(cantidad),
        fecha: new Date().toISOString().split('T')[0]
    };

    baseDeDatos.ventas.push(nuevaVenta);
    res.status(201).json({ mensaje: 'Venta creada', venta: nuevaVenta });
});

router.delete('/:id', (req, res) => {
    const baseDeDatos = require('../app');
    const idVenta = parseInt(req.params.id);

    const indexVenta = baseDeDatos.ventas.findIndex(v => v.id_venta === idVenta);
    if (indexVenta === -1) {
        return res.status(404).json({ error: 'Venta no encontrada' });
    }

    const ventaACancelar = baseDeDatos.ventas[indexVenta];

    const maniquiEncontrado = baseDeDatos.maniquies.find(m => m.id_maniqui === ventaACancelar.id_maniqui);
    if (maniquiEncontrado) {
        maniquiEncontrado.stock += ventaACancelar.cantidad;
    }

    baseDeDatos.ventas.splice(indexVenta, 1);
    res.json({ mensaje: 'Venta cancelada y stock devuelto con éxito' });
});

module.exports = router;