// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVAiahgvN3WomevhS-Ma43rYs7maB-ZYk",
  authDomain: "excel-made-easy-9b17e.firebaseapp.com",
  projectId: "excel-made-easy-9b17e",
  storageBucket: "excel-made-easy-9b17e.appspot.com",
  messagingSenderId: "579714164466",
  appId: "1:579714164466:web:811811c8758656633f526b",
  measurementId: "G-5NYYQF02E3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);