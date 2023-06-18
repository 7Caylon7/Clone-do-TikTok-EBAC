//ponte de conexão com o firebase



import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyCFdhWE0FFbYIctWUYsaPNH319gIs5BWHw",
  authDomain: "tik-tok-jornada-59605.firebaseapp.com",
  projectId: "tik-tok-jornada-59605",
  storageBucket: "tik-tok-jornada-59605.appspot.com",
  messagingSenderId: "229489962102",
  appId: "1:229489962102:web:3b1bc3a9614845c2d34357"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;