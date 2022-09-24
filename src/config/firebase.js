import firebase from 'firebase/app';
import 'firebase/auth';   // for authentication
import 'firebase/storage'; // for Firebase storage
import 'firebase/firestore'; // for Firebase firestore

var firebaseConfig = {
  apiKey: "AIzaSyAdzC_VytO8WYWJu8G7sPmacMT1BeUUqvk",
  authDomain: "olx-clone-1bdd3.firebaseapp.com",
  projectId: "olx-clone-1bdd3",
  storageBucket: "olx-clone-1bdd3.appspot.com",
  messagingSenderId: "411701208038",
  appId: "1:411701208038:web:678f2819710029f22d6c27",
  measurementId: "G-430E7Z3VF2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const authen = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
