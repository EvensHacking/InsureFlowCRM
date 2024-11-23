import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBy2u34Dk3UxtJTgCsYJC4Fw35615FjLDE",
  authDomain: "insureflowcrm.firebaseapp.com",
  projectId: "insureflowcrm",
  storageBucket: "insureflowcrm.appspot.com",
  messagingSenderId: "363648563621",
  appId: "1:363648563621:web:YOUR_APP_ID" // Vous devrez ajouter votre App ID spécifique
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);