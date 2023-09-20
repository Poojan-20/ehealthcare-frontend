// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import "firebase/firestore";
// import "firebase/auth";
// import "firebase/storage";

//STORED THE FIREBASE DETAILS IN .env.local FILE

const firebaseConfig = {
  apiKey: "AIzaSyATv6FDNADdCaRt12MfTnhSowT27V0q74E",
  authDomain: "medicare-e7173.firebaseapp.com",
  projectId: "medicare-e7173",
  storageBucket: "medicare-e7173.appspot.com",
  messagingSenderId: "296291895984",
  appId: "1:296291895984:web:7c0c4a08e95945086fc975"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
