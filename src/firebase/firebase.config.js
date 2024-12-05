// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyA6XQI4t-0TmFgYaEujls3aD2SedS9iSZo",
  // authDomain: "crowdcube-crowd-funding.firebaseapp.com",
  // projectId: "crowdcube-crowd-funding",
  // storageBucket: "crowdcube-crowd-funding.firebasestorage.app",
  // messagingSenderId: "284836349000",
  // appId: "1:284836349000:web:72480a3b76d52c466e047d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;