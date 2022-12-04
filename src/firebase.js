import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBbTQGjTDjlxcCIb-wA0iqnK63LUHnrTiI",
  authDomain: "auth-79346.firebaseapp.com",
  projectId: "auth-79346",
  storageBucket: "auth-79346.appspot.com",
  messagingSenderId: "828920751801",
  appId: "1:828920751801:web:63d47a984b7a79aa5c5d68",
  measurementId: "G-KZVCJK1QFF"
}; 
// upar vala ultracure vala hai firebase ye
// const firebaseConfig = {
//   apiKey: "AIzaSyDVHgoQGYfylShqxEWb70BWN23Ronf05ps",
//   authDomain: "auth-c88b4.firebaseapp.com",
//   projectId: "auth-c88b4",
//   storageBucket: "auth-c88b4.appspot.com",
//   messagingSenderId: "685895972038",
//   appId: "1:685895972038:web:d7361f17390c7f76c953c7"
// };

const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

// export { app,auth,storage,db };

 