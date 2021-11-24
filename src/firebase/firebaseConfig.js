import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArwimaM0PrRde0x7C_CXMKCJGI0Ugigqc",
    authDomain: "pruebafirebase-ee21.firebaseapp.com",
    projectId: "pruebafirebase-ee21",
    storageBucket: "pruebafirebase-ee21.appspot.com",
    messagingSenderId: "433488097868",
    appId: "1:433488097868:web:74fc1257dc5207406bfae9",
    measurementId: "G-6HWHJGP09K"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const auth = fb.auth();
const store = fb.firestore();

export { auth, store }