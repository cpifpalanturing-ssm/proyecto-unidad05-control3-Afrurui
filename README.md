# Maletas Viajeras

## Título del proyecto
Maletas Viajeras

## Integrantes del proyecto
- Álvaro Frutos Ruiz

## Descripción detallada de la idea del proyecto
Maletas Viajeras es un proyecto web para planificar viajes de forma sencilla. La aplicación permite gestionar la información principal de cada viaje en un único lugar, evitando tener los datos repartidos en diferentes notas o documentos.

El proyecto está orientado a ofrecer una herramienta clara y visual en la que el usuario pueda consultar viajes, crear nuevos registros, modificar viajes existentes y eliminar aquellos que ya no necesite.

## Objetivos que se pretenden alcanzar
- Permitir que los usuarios puedan crear viajes de manera sencilla.
- Reunir toda la información importante de los viajes en un solo lugar.
- Desarrollar una aplicación web conectada a una base de datos MySQL mediante una API propia.
- Aplicar en un proyecto real los conocimientos de HTML, CSS, JavaScript, Node.js, Express y MySQL.

## Funcionalidades principales previstas
- Crear viajes añadiendo datos básicos.
- Añadir dentro de cada viaje distintos destinos.
- Registrar actividades que se quieran hacer en cada lugar.
- Consultar la información almacenada de forma clara y ordenada.

## Descripción general del tipo de usuarios
La aplicación está pensada para personas que deseen planificar un viaje de forma organizada y sencilla.

## Estructura inicial prevista de la aplicación

### Frontend
Se usará HTML, CSS y JavaScript. Será la interfaz visual con la que va a interactuar el usuario para planificar el viaje y realizar operaciones sobre los datos.

### Backend
Se usará Node.js y Express. Será la parte encargada de procesar la lógica del proyecto web. Recibirá las peticiones enviadas desde el frontend y se comunicará con la base de datos.

### Base de datos
La base de datos será creada con MySQL. En ella se almacenará la información de los viajes. La API propia usará JSON para devolver los datos al frontend y mostrarlos al usuario.

## Control de cambios
### Añadido
- Implementación del CRUD completo sobre la entidad viajes.
- Endpoint POST /api/viajes para insertar nuevos viajes.
- Endpoint PUT /api/viajes/:id para modificar viajes existentes.
- Endpoint DELETE /api/viajes/:id para eliminar viajes existentes.
- Formulario en el frontend para crear y editar viajes.
- Botones en la interfaz para editar y eliminar viajes.
- Mensajes de operación para informar al usuario del resultado de las acciones.

### Modificado
- Archivo backend/server.js para ampliar la API REST con un CRUD completo.
- Archivo src/index.html para permitir interacción real con la API desde la interfaz.
- Archivo src/assets/js/javascript.js para implementar las operaciones de consulta, inserción, edición y eliminación mediante fetch.
- Archivo src/assets/css/estilos.css para mejorar la visualización de los nuevos elementos del CRUD.

### Eliminado
- No se han eliminado elementos en esta fase del proyecto.

## Justificación de los cambios realizados
Se han realizado estos cambios para evolucionar el proyecto y poder cumplir con los requisitos de la tercera entrega. Con estos cambios se ha pasado a una versión de la aplicación más completa y operativa.

---

## Estado actual del proyecto
En esta tercera entrega se presenta una segunda versión funcional del proyecto.

Actualmente, la aplicación ya permite:

1. Arrancar un servidor con Node.js y Express.
2. Conectarse a MySQL.
3. Consultar datos reales desde la base de datos.
4. Insertar nuevos viajes.
5. Modificar viajes existentes.
6. Eliminar viajes.
7. Mostrar toda la información en pantalla desde el frontend.

De esta forma, el proyecto ya cuenta con un CRUD completo funcional sobre la entidad principal `viajes`.

---

## Instrucciones básicas de ejecución

Para ejecutar el proyecto correctamente:

1. Iniciar el servicio de MySQL.
2. Importar o ejecutar el fichero `database/maletasviajeras.sql` en MySQL.
3. Instalar las dependencias del proyecto con: npm install
4. Ejecutar el servidor con: node backend/server.js
5. Abrir en el navegador la dirección:http://localhost:3000

## Operaciones disponibles desde la interfaz
1. Consultar y mostrar viajes almacenados en la base de datos.
2. Insertar nuevos viajes mediante el formulario.
3. Modificar viajes existentes.
4. Eliminar viajes existentes.

## Endpoints disponibles
1. GET /api/viajes
2. POST /api/viajes
3. PUT /api/viajes/:id
4. DELETE /api/viajes/:id