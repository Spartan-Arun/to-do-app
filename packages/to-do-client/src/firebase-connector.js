// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz4WQXKe5tQ_a6uFEIQjQPg1LQhOAl5x0",
  authDomain: "to-do-db-27db0.firebaseapp.com",
  projectId: "to-do-db-27db0",
  storageBucket: "to-do-db-27db0.appspot.com",
  messagingSenderId: "130845208218",
  appId: "1:130845208218:web:31cc9087873c49d3267923"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;