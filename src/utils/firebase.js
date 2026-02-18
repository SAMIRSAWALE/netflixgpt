// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoqfFzhJ4Bh8-Lrc6c9YQXKt-xjpygaNo",
  authDomain: "netflixgpt-d7d1d.firebaseapp.com",
  projectId: "netflixgpt-d7d1d",
  storageBucket: "netflixgpt-d7d1d.firebasestorage.app",
  messagingSenderId: "861726083969",
  appId: "1:861726083969:web:e88242562f30e5082f3680",
  measurementId: "G-859P4KZ11Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);