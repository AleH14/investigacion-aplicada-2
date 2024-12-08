# investigacion-aplicada-2


## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/auth-api.git
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd auth-api
    ```

3. Instala las dependencias:
    ```sh
    npm install
    ```

4. Configura las variables de entorno:
    - Crea un archivo `.env` en la raíz del proyecto.
    - Copia el contenido de `.envexample` a `.env` y completa los valores necesarios.

## Uso

1. Inicia el servidor en modo desarrollo:
    ```sh
    npm run dev
    ```

2. El servidor estará disponible en `http://localhost:3001`.

## Endpoints

### Registro de Usuario

- **URL:** `/api/register`
- **Método:** `POST`
- **Cuerpo de la Solicitud:**
    ```json
    {
        "username": "diciembre",
        "email": "noviembre@octubre.com",
        "password": "septiembre"
    }
    ```

### Inicio de Sesión

- **URL:** `/api/login`
- **Método:** `POST`
- **Cuerpo de la Solicitud:**
    ```json
    {
        "username": "diciembre",
        "password": "septiembre"
    }
    ```

### Acceso a Recursos Protegidos

- **URL:** `/api/protected-resource`
- **Método:** `GET`
- **Encabezado:**
    ```http
    Authorization: Bearer <token>
    ```

### Cerrar Sesión

- **URL:** `/api/logout`
- **Método:** `POST`
- **Encabezado:**
    ```http
    Authorization: Bearer <token>
    ```

## Archivos y Directorios Clave

- `app.js`: Configuración principal del servidor y rutas.
- `config.js`: Configuración de la conexión a la base de datos.
- `controllers/authController.js`: Controladores para registro, inicio de sesión, acceso a recursos y cierre de sesión.
- `middleware/authMiddleware.js`: Middleware para proteger rutas.
- `model/userModel.js`: Modelo de usuario con Mongoose.
- `routes/authRoutes.js`: Definición de rutas de autenticación.

## Licencia

Este proyecto está licenciado bajo la Licencia ISC.
