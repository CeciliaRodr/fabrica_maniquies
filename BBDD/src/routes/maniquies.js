const express = require('express');
const router = express.Router();

const { maniquies } = require('../app'); 

router.get('/', (req, res) => {
    res.json(maniquies);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const maniqui = maniquies.find(m => m.id_maniqui === id);

    if (!maniqui) {
        return res.status(404).json({ error: 'Maniquí no encontrado' });
    }

    res.json(maniqui);
});

router.post('/', (req, res) => {
    const { id_cabeza, id_torso, id_pierna_izq, id_pierna_der, id_brazo_izq, id_brazo_der, stock, precio } = req.body;

    const nuevoManiqui = {
        id_maniqui: maniquies.length + 1,
        id_cabeza: parseInt(id_cabeza),
        id_torso: parseInt(id_torso),
        id_pierna_izq: parseInt(id_pierna_izq), 
        id_pierna_der: parseInt(id_pierna_der),
        id_brazo_izq: parseInt(id_brazo_izq),
        id_brazo_der: parseInt(id_brazo_der),
        stock: parseInt(stock),
        precio: parseFloat(precio)
    };

    maniquies.push(nuevoManiqui);
    res.status(201).json({ mensaje: 'Se ha creado un nuevo maniquí', maniqui: nuevoManiqui });
});
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = maniquies.findIndex(m => m.id_maniqui === id);   

    if (index === -1) {
        return res.status(404).json({ error: 'Maniquí no encontrado' });
    }

    maniquies.splice(index, 1);
    res.json({ mensaje: 'Maniquí eliminado correctamente' });
});

router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const maniqui = maniquies.find(m => m.id_maniqui === id);
    
    if (!maniqui) {
        return res.status(404).json({ error: 'Maniquí no encontrado' });
    }

    const { id_cabeza, id_torso, id_pierna_izq, id_pierna_der, id_brazo_izq, id_brazo_der, stock, precio } = req.body;
    if (id_cabeza) maniqui.id_cabeza = parseInt(id_cabeza);
    if (id_torso) maniqui.id_torso = parseInt(id_torso);
    if (id_pierna_izq) maniqui.id_pierna_izq = parseInt(id_pierna_izq);
    if (id_pierna_der) maniqui.id_pierna_der = parseInt(id_pierna_der);
    if (id_brazo_izq) maniqui.id_brazo_izq = parseInt(id_brazo_izq);
    if (id_brazo_der) maniqui.id_brazo_der = parseInt(id_brazo_der);
    if (stock) maniqui.stock = parseInt(stock);
    if (precio) maniqui.precio = parseFloat(precio);

    res.json({ mensaje: 'Maniquí actualizado', maniqui });
});

module.exports = router;      
