// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA14x3eR3Mgc9FQMzMx6gH2jpH5ihtlPSI",
  authDomain: "netflixgpt-e2b38.firebaseapp.com",
  projectId: "netflixgpt-e2b38",
  storageBucket: "netflixgpt-e2b38.appspot.com",
  messagingSenderId: "981633179964",
  appId: "1:981633179964:web:742a6fb956dce7ec197e39",
  measurementId: "G-DYZ1MKV15V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
