// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGjaVwql88qX3_5xGz3snI8vocFkoj1uY",
  authDomain: "global-issues-59a90.firebaseapp.com",
  projectId: "global-issues-59a90",
  storageBucket: "global-issues-59a90.appspot.com",
  messagingSenderId: "723543867073",
  appId: "1:723543867073:web:531cf902b2199b56f6de40",
  measurementId: "G-JBTPYRPC8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);