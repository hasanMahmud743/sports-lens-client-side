// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMzflKWi4Z4aPIek74HJhI2FSV_N3hU1M",
  authDomain: "sports-lens-assignment.firebaseapp.com",
  projectId: "sports-lens-assignment",
  storageBucket: "sports-lens-assignment.appspot.com",
  messagingSenderId: "316676244301",
  appId: "1:316676244301:web:012f0e91165fc2a596ed04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app