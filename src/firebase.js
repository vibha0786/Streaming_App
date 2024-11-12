// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs5nhivGBFDiiOw5tIIOKTi8iYoDrwNIA",
  authDomain: "streaming-application-af963.firebaseapp.com",
  projectId: "streaming-application-af963",
  storageBucket: "streaming-application-af963.firebasestorage.app",
  messagingSenderId: "1009142671179",
  appId: "1:1009142671179:web:2c17608a5de52c7caa6ace"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth  = getAuth( app); 