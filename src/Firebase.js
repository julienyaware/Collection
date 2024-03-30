import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAWqWoQak8QejPPMUPP7hhSiv2egljRuEY",
  authDomain: "book-collection-960fe.firebaseapp.com",
  projectId: "book-collection-960fe",
  storageBucket: "book-collection-960fe.appspot.com",
  messagingSenderId: "1073421474438",
  appId: "1:1073421474438:web:030fab33ff378ac14ccf07",
  measurementId: "G-TYJXX7SL8X"
};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}