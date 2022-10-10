// Import the functions you need from the SDKs you need
import { initializeApp } 
from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  }
 from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiEOQbwVcUJXnx15-IwnbjQVas9nwwT2E",
  authDomain: "cloud-develop-503bf.firebaseapp.com",
  projectId: "cloud-develop-503bf",
  storageBucket: "cloud-develop-503bf.appspot.com",
  messagingSenderId: "760166861749",
  appId: "1:760166861749:web:a34afeaecf023ac56ae7fc",
  measurementId: "G-K0GG3FQZRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//module autenticvation
const auth = getAuth();
//validar login
export const Loginvalidation=(email,password)=>
signInWithEmailAndPassword(auth, email, password)
//registro de usuarios nuevos
export const registeruser=(email,password)=>
createUserWithEmailAndPassword(auth, email, password)