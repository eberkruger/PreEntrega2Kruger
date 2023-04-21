import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Iniciarlizar Firebase
const app = initializeApp(firebaseConfig);
// Inicializar Firestore
export const db = getFirestore(app)


/* REACT_APP_apiKey=AIzaSyBNaf7mhkfvsHwkzB6t_bXk_ilEDGG4Whc
REACT_APP_authDomain=backendtechzone.firebaseapp.com
REACT_APP_projectId=backendtechzone
REACT_APP_storageBucket=backendtechzone.appspot.com
REACT_APP_messagingSenderId=15909136858
REACT_APP_appId=1:15909136858:web:2a88ea5ee03ad70342f8e3 */