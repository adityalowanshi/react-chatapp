import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtd3I_1N6AuDro0bOrxNDebPL4KVCAUM4",
  authDomain: "chatapp-cbeb9.firebaseapp.com",
  projectId: "chatapp-cbeb9",
  storageBucket: "chatapp-cbeb9.appspot.com",
  messagingSenderId: "642412564682",
  appId: "1:642412564682:web:5acdf6d2461ab5d9cc2433",
  measurementId: "G-0QDH0EPX6J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
