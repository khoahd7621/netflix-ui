import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { seedDatabase } from "../seed";

// We need somehow seed the database
// config here
const config = {
  apiKey: "AIzaSyBjJNDBYJ-ABm1BXbjmuJFtMkTohQoOwFQ",
  authDomain: "netflix-clone-98891.firebaseapp.com",
  projectId: "netflix-clone-98891",
  storageBucket: "netflix-clone-98891.appspot.com",
  messagingSenderId: "1022646862483",
  appId: "1:1022646862483:web:3ba0e70726dd385579c366",
};

const Firebase = firebase.initializeApp(config);

// seedDatabase(Firebase);

export { Firebase };
