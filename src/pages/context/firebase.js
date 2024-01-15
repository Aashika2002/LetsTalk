import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, onAuthStateChanged } from "firebase/auth"
const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

const firebaseConfig = {
  apiKey: "AIzaSyB0fVCd-8-f6SA3oYCDKBObA3pYPOE69U8",
  authDomain: "lets-talk-b5f9b.firebaseapp.com",
  projectId: "lets-talk-b5f9b",
  storageBucket: "lets-talk-b5f9b.appspot.com",
  messagingSenderId: "170133958208",
  appId: "1:170133958208:web:fc6f6f73988dd2ee35f9a5",
  measurementId: "G-9H24C2PZXL"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseapp);

export const FirebaseProvider = (props) =>
 {

  const createUserAccount = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  const signIntoExistingAccount = (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password);
  const logout =()=> signOut(firebaseAuth);
  const getUser =() => onAuthStateChanged(firebaseAuth);
  return <FirebaseContext.Provider value={{ createUserAccount,signIntoExistingAccount ,logout,getUser}}>{props.children}</FirebaseContext.Provider>

};