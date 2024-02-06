# Tripleten web_project_around_auth

Proyecto "Alrededor de los EE.UU." - Frontend

Este proyecto de React se enfoca en implementar funciones de registro y autorización para el frontend de la aplicación "Alrededor de los EE.UU." por el momento, está conectada la funcionalidad principal al backend de TripleTen.
Toda la funcionalidad estará disponible para usuarios autorizados a través de la ruta raíz "/"

## Uso Local

Asegúrate de tener Node.js y npm instalados en tu máquina. Luego, clona el repositorio y ejecuta el siguiente comando para instalar las dependencias necesarias:

npm install

para ejecutar la aplicación localmente (por ejemplo, http://localhost:3000/):

npm run start

### Endpoints

#### /signup: para el registro de usuarios.

#### /signin: para a autorización (inicio de sesión) de usuarios.

Este endpoint devuelve una un token, para comprobar la validez del usuario:

#### GET /users/me
