// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARNi_qyJ4OujFbl0Hks45mKElhpeTeONw",
  authDomain: "miniblog-648a3.firebaseapp.com",
  projectId: "miniblog-648a3",
  storageBucket: "miniblog-648a3.appspot.com",
  messagingSenderId: "750464476175",
  appId: "1:750464476175:web:96ae30ebbf86814219ef7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();