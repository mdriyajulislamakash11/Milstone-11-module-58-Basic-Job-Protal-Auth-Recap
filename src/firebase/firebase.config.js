// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkOIsUpN7Ekh0RBs1jJroY1MRUHZhH8do",
  authDomain: "job-protal-project.firebaseapp.com",
  projectId: "job-protal-project",
  storageBucket: "job-protal-project.firebasestorage.app",
  messagingSenderId: "700621447237",
  appId: "1:700621447237:web:9b1197ee1f6865b5a2032c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);