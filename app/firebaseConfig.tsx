// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKecGuP6GCj7zj-ENQ-8aYWCXGZLo0wGU",
  authDomain: "realtime-chat-app-879b1.firebaseapp.com",
  projectId: "realtime-chat-app-879b1",
  storageBucket: "realtime-chat-app-879b1.firebasestorage.app",
  messagingSenderId: "287279887554",
  appId: "1:287279887554:web:f699511ae0d3816198775b",
  measurementId: "G-BGWYLNCT79"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

export default { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB };