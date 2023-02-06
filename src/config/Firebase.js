// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO2SfO_ZvQc-GgfOhgEnC4MgzO5dJbmIs",
  authDomain: "netflix-clone-jinix.firebaseapp.com",
  projectId: "netflix-clone-jinix",
  storageBucket: "netflix-clone-jinix.appspot.com",
  messagingSenderId: "61577292912",
  appId: "1:61577292912:web:66d09d378d9135770758b5",
  measurementId: "G-87Z6H6TJQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);