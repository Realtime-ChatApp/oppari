import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, createUserWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAKecGuP6GCj7zj-ENQ-8aYWCXGZLo0wGU",
  authDomain: "realtime-chat-app-879b1.firebaseapp.com",
  databaseURL: "https://realtime-chat-app-879b1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "realtime-chat-app-879b1",
  storageBucket: "realtime-chat-app-879b1.firebasestorage.app",
  messagingSenderId: "287279887554",
  appId: "1:287279887554:web:f699511ae0d3816198775b",
  measurementId: "G-BGWYLNCT79"
};

// Alustetaan Firebase sovellus
const app = initializeApp(firebaseConfig);

// Alustetaan Firebase Authentication
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Tuodaan auth-menetelmiä
export { auth, createUserWithEmailAndPassword };
