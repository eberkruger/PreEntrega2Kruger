import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBNaf7mhkfvsHwkzB6t_bXk_ilEDGG4Whc",
  authDomain: "backendtechzone.firebaseapp.com",
  projectId: "backendtechzone",
  storageBucket: "backendtechzone.appspot.com",
  messagingSenderId: "15909136858",
  appId: "1:15909136858:web:2a88ea5ee03ad70342f8e3"
};

// Iniciarlizar Firebase
const app = initializeApp(firebaseConfig);
// Inicializar Firestore
export const db = getFirestore(app)