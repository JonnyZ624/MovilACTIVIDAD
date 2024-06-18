import { initializeApp } from "firebase/app";
import{getDatabase} from 'firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyA1f1TuIMOu3EnvIcZlfHGxAOOHkzdhN2U",
  authDomain: "app-movil-d6512.firebaseapp.com",
  databaseURL: "https://app-movil-d6512-default-rtdb.firebaseio.com",
  projectId: "app-movil-d6512",
  storageBucket: "app-movil-d6512.appspot.com",
  messagingSenderId: "572531278058",
  appId: "1:572531278058:web:e90adc8fdfe5574ef61793"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app) 