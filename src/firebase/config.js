
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDU6jNabPMrfn5mrPedREa8RtAXijO_96w",
  authDomain: "ecommerce-f1c3e.firebaseapp.com",
  projectId: "ecommerce-f1c3e",
  storageBucket: "ecommerce-f1c3e.appspot.com",
  messagingSenderId: "300500728974",
  appId: "1:300500728974:web:60b43a9ddb94f3a4a15ddf"
};


const app = initializeApp(firebaseConfig);

export const initializeFirebase = () => app