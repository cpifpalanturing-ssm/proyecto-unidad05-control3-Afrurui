Título del proyecto.
Maletas Viajeras
Nombre y apellidos de todos los integrantes del grupo.
Álvaro Frutos Ruiz
Descripción detallada de la idea del proyecto.
Maletas Viajeras es un proyecto web para planificar viajes.
Objetivos que se pretenden alcanzar.
Que los usuarios puedan crear viajes de manera sencilla y que puedan tener toda la información de sus viajes en un solo lugar.
Funcionalidades principales previstas.
•	Crear el viaje añadiendo datos básicos.
•	Añadir dentro de cada viaje distintos destinos.
•	Registrar actividades que se quieran hacer en ese lugar.
Descripción general del tipo de usuarios (si procede).
Personas que deseen planificar un viaje.
Estructura inicial prevista de la aplicación (breve explicación del frontend, backend y base de datos). La descripción debe ser lo suficientemente clara y concreta como para entender qué problema resuelve la aplicación y cómo se va a desarrollar técnicamente.
•	Frontend: Se usará HTML, CSS y JavaScript. Será la interfaz visual con la que va a interactuar el usuario para planificar el viaje.
•	Backend: Se usará Node.js. Será la parte encargada de procesar la lógica del proyecto web. Recibirá las peticiones enviadas desde el frontend y se comunicará con la base de datos, que será creada con MySQL. Se utilizará una API propia que usará JSON para que la información pueda ser mostrada al usuario.
## Control de cambios

### Añadido
- Archivo `index.html`.
- Archivo `estilos.css`.
- Carpeta `backend` con el fichero `server.js`.
- Servidor implementado con Node.js y Express.
- Conexión entre el backend y la base de datos MySQL.
- Endpoint `GET /api/viajes` para listar viajes desde la base de datos.
- Archivo `javascript.js` para realizar una petición de los viajes mediante `fetch`.
- Visualización en pantalla de los viajes recuperados desde la API.
- Archivos `package.json` y `package-lock.json`.

### Modificado
- Estructura del proyecto con frontend, backend y base de datos.
- `README.md` con los cambios.

### Eliminado
- No se han eliminado elementos en esta fase del proyecto.

### Justificación de los cambios realizados
Se han realizado estos cambios para cumplir los requisitos del control 2 y pasar de una planificación inicial del proyecto a una primera versión funcional real.