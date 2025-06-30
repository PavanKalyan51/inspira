import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwHCynL8LjXFAQjfOHlFX-sBKcYEPv5w0",
  authDomain: "inspira-4af56.firebaseapp.com",
  projectId: "inspira-4af56",
  storageBucket: "inspira-4af56.firebasestorage.app",
  messagingSenderId: "227490591157",
  appId: "1:227490591157:web:c6fbc335a2a88871bfe9fc",
  measurementId: "G-TYPSX66MSL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);