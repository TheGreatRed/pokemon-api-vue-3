
# Pokémon Viewer App

## Descripción

Esta es una aplicación web desarrollada con **Vue 3** y **Bootstrap** que permite obtener información aleatoria de un Pokémon mediante una **Cloud Function** de Firebase. La app genera un número aleatorio entre 1 y 151, y luego hace una solicitud a la API de Pokémon para obtener los detalles del Pokémon correspondiente. La información obtenida incluye nombre, imagen, tipos, peso y habilidades.

## Características

- **Vue 3** como framework de JavaScript.
- **Bootstrap 5** para el diseño y la interfaz de usuario.
- **Cloud Function de Firebase** para obtener datos de la API pública de Pokémon.
- **Generación de Pokémon aleatorio** entre 1 y 151.
- **Indicador de carga** (spinner) mientras se realiza la solicitud.

## Requisitos

- **Node.js** (recomendado versión LTS)
- **Vue CLI** para la creación del proyecto Vue 3
- **Firebase CLI** para interactuar con Firebase y emular funciones localmente
- **Postman** o un navegador para probar el endpoint localmente

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/TheGreatRed/pokemon-api-vue-3.git
   cd pokemon-api-vue-3
   ```

2. **Instala las dependencias:**

   Si no tienes Node.js y npm instalados, puedes descargarlos desde [nodejs.org](https://nodejs.org/).

   Luego, ejecuta el siguiente comando para instalar las dependencias del proyecto:

   ```bash
   npm install
   ```

3. **Configura Firebase:**

   Si aún no tienes un proyecto de Firebase, sigue estos pasos:
   - Ve a la [Firebase Console](https://console.firebase.google.com/) y crea un nuevo proyecto.
   - Configura las **Firebase Cloud Functions** en tu proyecto siguiendo [esta documentación](https://firebase.google.com/docs/functions/get-started).
   - Asegúrate de haber inicializado Firebase en el proyecto con `firebase init` y de haber implementado la función que consulta la API de Pokémon.

4. **Emula las funciones localmente:**

   Para ejecutar la Cloud Function de Firebase localmente y probar la app de manera local, primero necesitas instalar el emulador de funciones de Firebase:

   ```bash
   firebase emulators:start --only functions
   ```

5. **Ejecuta la aplicación:**

   Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

   ```bash
   npm run serve
   ```

   La aplicación estará disponible en `http://localhost:8080`.

---

## Probar el Endpoint desde Postman o el Navegador

### 1. **Prueba desde el navegador:**

Si has iniciado los emuladores de Firebase en tu entorno local, puedes hacer una solicitud al endpoint de la función usando la siguiente URL en tu navegador:

```bash
http://localhost:5001/pokemon-api-vue-3/us-central1/getPokemonData?pokemon=<random-number>
```

Reemplaza `<random-number>` con cualquier número entre 1 y 151 (por ejemplo, `pikachu` o un número aleatorio como `25`).

### Ejemplo de URL para un Pokémon aleatorio:

```bash
http://localhost:5001/pokemon-api-vue-3/us-central1/getPokemonData?pokemon=25
```

Esto te devolverá los datos del Pokémon correspondiente al número `25` (en este caso, Pikachu).

### 2. **Prueba desde Postman:**

Sigue estos pasos para realizar una solicitud desde Postman:

1. Abre **Postman**.
2. Crea una nueva solicitud:
   - Tipo de solicitud: **GET**.
   - URL: `http://localhost:5001/pokemon-api-vue-3/us-central1/getPokemonData?pokemon=<random-number>`.
   - Reemplaza `<random-number>` con el número aleatorio que desees.
   
   Ejemplo:
   ```bash
   http://localhost:5001/pokemon-api-vue-3/us-central1/getPokemonData?pokemon=25
   ```

3. Haz clic en el botón **Send** para enviar la solicitud.
4. Deberías obtener una respuesta JSON que contiene la información del Pokémon. Por ejemplo:

```json
{
  "name": "pikachu",
  "id": 25,
  "sprites": {
    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  "types": [
    {
      "type": {
        "name": "electric"
      }
    }
  ],
  "weight": 60,
  "abilities": [
    {
      "ability": {
        "name": "static"
      }
    }
  ]
}
```

### 3. **Verificación de la Función**

Si todo está configurado correctamente, deberías poder realizar la solicitud y recibir los detalles del Pokémon solicitado.

---

## Despliegue

Cuando estés listo para desplegar la aplicación a producción, sigue estos pasos:

1. **Despliegue de la función de Firebase:**

   Primero, asegúrate de que tu Cloud Function esté funcionando correctamente y luego puedes desplegarla con el siguiente comando:

   ```bash
   firebase deploy --only functions
   ```

2. **Despliegue del frontend:**

   Si deseas desplegar la parte frontend, puedes usar servicios como **Firebase Hosting** o **Netlify**. Para Firebase Hosting:

   ```bash
   firebase deploy --only hosting
   ```

---

## Contribuciones

Si deseas contribuir a este proyecto, por favor haz un **fork** y luego crea un **pull request** con tus cambios. Asegúrate de que tu código esté limpio y bien documentado.

---

## Licencia

Este proyecto está bajo la **MIT License**.
