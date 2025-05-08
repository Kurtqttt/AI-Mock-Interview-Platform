// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb7oZ-72YGZO8qCXyC16RJMADkW5RdeHw",
  authDomain: "prepwise-ec242.firebaseapp.com",
  projectId: "prepwise-ec242",
  storageBucket: "prepwise-ec242.firebasestorage.app",
  messagingSenderId: "1088627837821",
  appId: "1:1088627837821:web:2d38c7c8e8752d21fe9a14",
  measurementId: "G-219K881Y9Y"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);