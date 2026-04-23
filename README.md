# Sistema de Gestión de Fábrica de Maniquíes

Este proyecto contiene la estructura y carga de datos para una base de datos de gestión de stock y ventas de maniquíes.

## Contenido del Repositorio
Los scripts están organizados para ser ejecutados en orden secuencial:

1.  **`creates.sql`**: Definición de tablas, llaves primarias y relaciones (Foreign Keys).
2.  **`inserts.sql`**: Carga de datos maestros y registros de piezas (10 por tipo), maniquíes ensamblados, clientes y ventas.
3.  **`consultas.sql`**: Consultas solicitadas para el control de stock y reportes.

## Instrucciones de Ejecución
Para que la base de datos funcione correctamente, siga este orden en su cliente SQL (MySQL/DBeaver/VSC):

1.  Ejecutar el archivo `creates.sql` para crear la base de datos `empresa_maniquies` y su estructura.
2.  Ejecutar el archivo `inserts.sql` para poblar las tablas. **Nota:** Este archivo debe ejecutarse después de los esquemas debido a las restricciones de integridad referencial.
3.  Finalmente, puede correr las consultas en `consultas.sql`.

## Tecnologías utilizadas
- MySQL
- Git
- DBeaver
- DBdiagram https://dbdiagram.io/d/69ea8e73d80a958d1cca1118
