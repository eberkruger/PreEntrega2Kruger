# Techzone
## Ecommerce desarrollado con React JS

Techzone es un proyecto de ecommerce desarrollado con create-react-app que permite la compra de productos tecnológicos. Utiliza Firebase como base de datos para obtener los productos y enviar órdenes de compra, y también utiliza Node.js y Sass para su desarrollo.

Con este proyecto podrás: 
- Crear una aplicación web en tiempo real.
- Almacenar datos en la nube.

## Instalación

Para poder utilizar este proyecto, necesitarás tener instalado Node.js, SASS y NPM en tu computadora.

1. Clona este repositorio: git clone https://github.com/eberkruger/ProyectoReactJS
2. Navega al directorio del proyecto: cd tu-repo
3. Instala las dependencias: npm install

## Configuración

1. Crea una cuenta en Firebase y crea un nuevo proyecto.
2. Haz clic en "Agregar aplicación" y elige "Web".
3. Completa los detalles de la aplicación y haz clic en "Registrar".
4. Copia la configuración de Firebase y pégala en el archivo .env de tu proyecto:

```sh
REACT_APP_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
REACT_APP_AUTH_DOMAIN=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
REACT_APP_PROJECT_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
REACT_APP_STORAGE_BUCKET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
REACT_APP_MESSAGING_SENDER_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
REACT_APP_APP_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

5. Abre la consola de Firebase y haz clic en "Database" en la barra lateral izquierda.
6. Crea una nueva base de datos en tiempo real y configúrala según tus necesidades.
7. Copia la URL de tu base de datos y pégala en el archivo src/firebase/config.js:

```sh
import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: "https://tu-base-de-datos.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
```

## Uso

Para iniciar la aplicación, ejecuta el siguiente comando en la terminal:
```sh
npm start
```
La aplicación se abrirá automáticamente en tu navegador. Si no es así, ve a http://localhost:3000 en tu navegador.

## Créditos

Este proyecto fue desarrollado por Eber Kruger.
