// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPJhz4d7ktALGo5I0DSMCsVdH7t00hHwk",
  authDomain: "assignment-eleven-9f89f.firebaseapp.com",
  projectId: "assignment-eleven-9f89f",
  storageBucket: "assignment-eleven-9f89f.firebasestorage.app",
  messagingSenderId: "814980546449",
  appId: "1:814980546449:web:a1597d40b0d387ef9da430"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default (auth);