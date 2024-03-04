// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAavfv3wLFr19p_Dwanq-G360_f3-shg9E",
  authDomain: "mern-bookstore-inventory.firebaseapp.com",
  projectId: "mern-bookstore-inventory",
  storageBucket: "mern-bookstore-inventory.appspot.com",
  messagingSenderId: "901512261897",
  appId: "1:901512261897:web:40e3519b7a97c8933323d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app