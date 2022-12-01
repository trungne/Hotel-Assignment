import type { FirebaseOptions } from "firebase/app";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// Firebase configuration
export const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyAZXX1TkF-EdFbuQDicQxuE4KWk4Kjrax0",
  authDomain: "hotel-9180b.firebaseapp.com",
  projectId: "hotel-9180b",
  storageBucket: "hotel-9180b.appspot.com",
  messagingSenderId: "262425829287",
  appId: "1:262425829287:web:abb224b7872edeaf1b6082",
};

const firebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebaseApp);
export const priceCollection = collection(firestore, "priceAdjust");
export const roomCollection = collection(firestore, "rooms");
export default firebaseApp;
