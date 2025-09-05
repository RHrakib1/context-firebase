// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBt8-yOjWDS3X75lL3Mi9fbc3t3MmpYC28",
    authDomain: "context-firebase-7e66a.firebaseapp.com",
    projectId: "context-firebase-7e66a",
    storageBucket: "context-firebase-7e66a.firebasestorage.app",
    messagingSenderId: "110893335675",
    appId: "1:110893335675:web:ec93d13c5d978ac0ba0ede"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;