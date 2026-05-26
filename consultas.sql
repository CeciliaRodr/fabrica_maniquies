-- Listado de Stock: Obtener el número de serie, material y color de todas las piernas que pertenezcan al lado derecho.
SELECT 
    p.id_pierna_der AS 'Nro Serie',
    m.nombre AS 'Material',
    c.nombre AS 'Color',
    p.stock AS 'Cantidad de Stock'
FROM piernas_der p
JOIN materiales m ON p.id_material = m.id_material
JOIN colores c ON p.id_color = c.id_color;