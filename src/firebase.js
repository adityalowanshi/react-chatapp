import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9Y4-IfRAmNjYo5eu3UQI-h47j1i5VAHY",
  authDomain: "chat-app-a38bf.firebaseapp.com",
  projectId: "chat-app-a38bf",
  storageBucket: "chat-app-a38bf.appspot.com",
  messagingSenderId: "308234726200",
  appId: "1:308234726200:web:1499357055bdab7c6eefcd",
  measurementId: "G-QSV8SVHHD4"
};

// Initializing Firebase 
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()







 