import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAut, getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDLLpLuJlHgv7UfjkFi6oValBLLtHCESus",
  authDomain: "bloggg-8cd30.firebaseapp.com",
  projectId: "bloggg-8cd30",
  storageBucket: "bloggg-8cd30.appspot.com",
  messagingSenderId: "452758491349",
  appId: "1:452758491349:web:3bdd602f5dfe0bfa28d25c",
};

const app = initializeApp(firebaseConfig);

export const db= getFirestore();
export const auth= getAuth();