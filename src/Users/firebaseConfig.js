// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKT_tKowqir1z7qhpXuecPRMltF5q95E8",
  authDomain: "dashboard-782e8.firebaseapp.com",
  projectId: "dashboard-782e8",
  storageBucket: "dashboard-782e8.appspot.com",
  messagingSenderId: "3454148313",
  appId: "1:3454148313:web:4a2a0d51c8d2e8341828c8",
  measurementId: "G-GGS1J4TC9G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;
