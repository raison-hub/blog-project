import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwjjn2Oc35yxOOkAx0A92wVuyxt57UVQM",
  authDomain: "blog-app-bd58f.firebaseapp.com",
  projectId: "blog-app-bd58f",
  storageBucket: "blog-app-bd58f.firebasestorage.app",
  messagingSenderId: "71819830049",
  appId: "1:71819830049:web:5169e9c05b154293e41460",
  measurementId: "G-6S69ZZSN4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);

export default app;