// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGb78Nb3QYXiNLyxq__J8GF2200301ACU",
  authDomain: "memo-cf7e2.firebaseapp.com",
  projectId: "memo-cf7e2",
  storageBucket: "memo-cf7e2.appspot.com",
  messagingSenderId: "993639667505",
  appId: "1:993639667505:web:9ad1037ed4a38a5970c210",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
