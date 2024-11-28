
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyDiBiZFG2B-_EQVmSVvadyeyn97hvrxAng",
  authDomain: "contacts-fierbase.firebaseapp.com",
  projectId: "contacts-fierbase",
  storageBucket: "contacts-fierbase.firebasestorage.app",
  messagingSenderId: "859439882749",
  appId: "1:859439882749:web:a6b760a6b7f74b24ec3994"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);