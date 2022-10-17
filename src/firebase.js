import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbTQGjTDjlxcCIb-wA0iqnK63LUHnrTiI",
  authDomain: "auth-79346.firebaseapp.com",
  projectId: "auth-79346",
  storageBucket: "auth-79346.appspot.com",
  messagingSenderId: "828920751801",
  appId: "1:828920751801:web:63d47a984b7a79aa5c5d68",
  measurementId: "G-KZVCJK1QFF"
};

const app = initializeApp(firebaseConfig);

const auth= getAuth();

export { app,auth };
