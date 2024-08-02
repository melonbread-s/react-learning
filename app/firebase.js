// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkPlsyXfAFaoNdViYbFjUYCUVvOKDY_Dk",
  authDomain: "expense-tracker-b4561.firebaseapp.com",
  projectId: "expense-tracker-b4561",
  storageBucket: "expense-tracker-b4561.appspot.com",
  messagingSenderId: "866889557914",
  appId: "1:866889557914:web:7721fcda74ca0883f53c23",
  measurementId: "G-TBGP93054E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);