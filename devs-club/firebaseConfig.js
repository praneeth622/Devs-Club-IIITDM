// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYbetqjdqN1MEjgB-KdFxn7uPYLdjtOx4",
  authDomain: "devclub-dbf85.firebaseapp.com",
  projectId: "devclub-dbf85",
  storageBucket: "devclub-dbf85.firebasestorage.app",
  messagingSenderId: "898707594200",
  appId: "1:898707594200:web:47338e1a85f3a606e4b0ad",
  measurementId: "G-KJY4CW18SW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Init storage 
const storage = getStorage(app);
const storageRef = ref(storage);

//Export the variables 
export { app, analytics, storage, storageRef };