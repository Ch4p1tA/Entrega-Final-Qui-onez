import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIapL8Q2-OPGrOY-NHP7Yz1X-CjIYR3yA",
  authDomain: "mi-tienda-e9bcc.firebaseapp.com",
  projectId: "mi-tienda-e9bcc",
  storageBucket: "mi-tienda-e9bcc.appspot.com",
  messagingSenderId: "880718027126",
  appId: "1:880718027126:web:531a47b4a87e27928d8257"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);