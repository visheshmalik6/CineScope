// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 👈 ADD THIS

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8WZC5sI1Xu9cotaIqDeDV5VrJLnbHeuU",
  authDomain: "cinescope-f433b.firebaseapp.com",
  projectId: "cinescope-f433b",
  storageBucket: "cinescope-f433b.firebasestorage.app",
  messagingSenderId: "533793056739",
  appId: "1:533793056739:web:23694a0c46527d0df722d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔐 Auth
export const auth = getAuth(app);

// 💾 Firestore
export const db = getFirestore(app); // 👈 ADD THIS

export default app;
