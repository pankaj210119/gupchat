// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxA_jnPSYq3gk6vCcmZQumsT3rWPrIHEs",
  authDomain: "gupchat-d7a86.firebaseapp.com",
  projectId: "gupchat-d7a86",
  storageBucket: "gupchat-d7a86.firebasestorage.app",
  messagingSenderId: "911452377640",
  appId: "1:911452377640:web:6ff59a6c8021a59f53db1d",
  measurementId: "G-0C0V7J023R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);