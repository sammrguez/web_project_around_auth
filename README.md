# Tripleten web_project_around_auth

Proyecto "Alrededor de los EE.UU." - Frontend

Este proyecto de React se enfoca en implementar funciones de registro y autorización para el frontend de la aplicación "Alrededor de los EE.UU." por el momento, está conectada la funcionalidad principal al backend de TripleTen.
Toda la funcionalidad estará disponible para usuarios autorizados a través de la ruta raíz "/"

## Tecnologías

Asegúrate de tener Node.js y npm instalados en tu máquina. Luego, clona el repositorio y ejecuta el siguiente comando para instalar las dependencias necesarias:

npm install

## Uso

Asegúrate de configurar las variables de entorno necesarias, como el puerto en el que se ejecutará el servidor, si es necesario. Luego, puedes ejecutar el servidor usando el siguiente comando:

npm run start

### Endpoints

#### /signup: para el registro de usuarios.

#### /signin: para a autorización (inicio de sesión) de usuarios.

Este endpoint devuelve una un token, para comprobar la validez del usuario:

#### GET /users/me
