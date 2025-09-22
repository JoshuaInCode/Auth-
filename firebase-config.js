import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
// Configuración de Firebase para tu proyecto web
const firebaseConfig = {
  apiKey: "AIzaSyBXQbUHKveU1ZY8tx16Y7hArrBw9muc03U",
  authDomain: "skywalker-auth-project.firebaseapp.com",
  projectId: "skywalker-auth-project",
  storageBucket: "skywalker-auth-project.firebasestorage.app",
  messagingSenderId: "150915597332",
  appId: "1:150915597332:web:e7c65d76d247d4798a9301",
  measurementId: "G-WPNJF594ZW"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 