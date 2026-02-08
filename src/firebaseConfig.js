// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// TODO: Replace with your project's config keys from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyB8WkAJGuHUXr6kC7rYD7SwKVVcgoO6Mis",
  authDomain: "caminogame-2e5f9.firebaseapp.com",
  projectId: "caminogame-2e5f9",
  storageBucket: "caminogame-2e5f9.firebasestorage.app",
  messagingSenderId: "282744538733",
  appId: "1:282744538733:web:9786f07be4416bff38e164",
  measurementId: "G-3R7V0YGBXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
