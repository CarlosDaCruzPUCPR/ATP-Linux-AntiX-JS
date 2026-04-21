// Importações do Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuração do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBXseK70LqS9mTa4vsGZoSSsuFM35exFIM",
  authDomain: "atp-devweb-de745.firebaseapp.com",
  projectId: "atp-devweb-de745",
  storageBucket: "atp-devweb-de745.firebasestorage.app",
  messagingSenderId: "673305785623",
  appId: "1:673305785623:web:d3e8d553cb5469e3e53352",
  measurementId: "G-8M0FB956YZ"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Serviços que vamos usar no projeto
export const auth = getAuth(app);
export const db = getFirestore(app);