
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCtqNanpQ22GvwoeuCbsDxqtFHCt75cPhk",
  authDomain: "react-netflix-clone-d6e58.firebaseapp.com",
  projectId: "react-netflix-clone-d6e58",
  storageBucket: "react-netflix-clone-d6e58.appspot.com",
  messagingSenderId: "370033162542",
  appId: "1:370033162542:web:0aba8cd504148de5fda2bf",
  measurementId: "G-98G1CHFJZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app);