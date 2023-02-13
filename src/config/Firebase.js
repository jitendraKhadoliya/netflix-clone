// import firebase from 'firebase';
// import firebase from './firebase';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// import {} from 'firebase/compat/'

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
// const analytics = getAnalytics(app);

// for authantication i Will use here auth function 
export const auth = getAuth(app);

// for database i will use firestore
// const db = firebase.firestore();


// now i will export them 
// export {auth};
// export default db;