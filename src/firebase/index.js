// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCENK8NGzsZv2EySnYesuUQrNxd781MDo", // not secret. safe to embed.
  authDomain: "syafiq-aiman.firebaseapp.com",
  projectId: "syafiq-aiman",
  storageBucket: "syafiq-aiman.appspot.com",
  messagingSenderId: "730730426982",
  appId: "1:730730426982:web:22dc3820c0a7b38476f3a7",
  measurementId: "G-Y3VZ457K7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
