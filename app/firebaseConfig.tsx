// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, connectAuthEmulator, setPersistence, getReactNativePersistence } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

// Environment variables
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} from "@env";

// Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase App
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage), // Correct persistence setup for React Native
});

// Initialize Firestore
const FIREBASE_DB = getFirestore(FIREBASE_APP);

// Connect to Firebase emulators
if (__DEV__) {
  connectAuthEmulator(FIREBASE_AUTH, "http://192.168.1.102:9099");
  connectFirestoreEmulator(FIREBASE_DB, "192.168.1.102", 8080);
}

export { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB };
