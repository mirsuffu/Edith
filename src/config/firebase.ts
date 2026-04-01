import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// PLACEHOLDER — Replace with real Firebase project config
// See FIREBASE_SETUP_GUIDE.md for step-by-step instructions
const firebaseConfig = {
  apiKey: "AIzaSyBe11U4RkUbpvs-H0YbJH8oIztS0f5r4Dc",
  authDomain: "edith-4f693.firebaseapp.com",
  projectId: "edith-4f693",
  storageBucket: "edith-4f693.firebasestorage.app",
  messagingSenderId: "199651360117",
  appId: "1:199651360117:web:82732458f9a9a6ff08673c",
};

// Only init Firebase if config is provided
const hasConfig = true;

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Paste your FCM VAPID key here
export const VAPID_KEY = "BB2SuH4VAVFH4HbgQBwYy3hp5sui3BRl1v_NDvsSgf8xZ-lXsXK8xdXQO2gN-jg9rTyt25_Wcf5x2R6tATtmZYk";

export const isFirebaseConfigured = hasConfig;
