import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { isSupported, getMessaging, Messaging } from 'firebase/messaging';

// Real Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyBe11U4RkUbpvs-H0YbJH8oIztS0f5r4Dc",
  authDomain: "edith-4f693.firebaseapp.com",
  projectId: "edith-4f693",
  storageBucket: "edith-4f693.firebasestorage.app",
  messagingSenderId: "199651360117",
  appId: "1:199651360117:web:82732458f9a9a6ff08673c",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// FCM VAPID key (Web Push Certificate)
export const VAPID_KEY = "BB2SuH4VAVFH4HbgQBwYy3hp5sui3BRl1v_NDvsSgf8xZ-lXsXK8xdXQO2gN-jg9rTyt25_Wcf5x2R6tATtmZYk";

/**
 * Safely get messaging instance.
 * Returns null if not supported (Safari/Non-secure connection/Old browser).
 */
export const getMessagingInstance = async (): Promise<Messaging | null> => {
  try {
    const supported = await isSupported();
    if (!supported) {
      console.warn('FCM is not supported in this browser.');
      return null;
    }
    return getMessaging(app);
  } catch (err) {
    console.warn('Failed to initialize FCM:', err);
    return null;
  }
};

export const isFirebaseConfigured = true;
