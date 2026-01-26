// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBqbiWlIYJzeeKg2DZEg7rlktlg6fYN99c",
    authDomain: "multiuserblogwebsite.firebaseapp.com",
    projectId: "multiuserblogwebsite",
    storageBucket: "multiuserblogwebsite.firebasestorage.app",
    messagingSenderId: "267054304500",
    appId: "1:267054304500:web:f204d04aa1383f6f4da2a1",
    measurementId: "G-Y08G6QB7W3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;