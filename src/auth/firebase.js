import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: await import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: await import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: await import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: await import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: await import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: await import.meta.env.VITE_FIREBASE_APP_ID
};

initializeApp(firebaseConfig);

const auth = getAuth();

export {
  auth
};