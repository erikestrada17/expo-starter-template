import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.APP_APIKEY,
    authDomain: process.env.APP_AUTHDOMAIN,
    projectId: process.env.APP_PROJECTID,
    storageBucket: process.env.APP_STORAGEBUCKET,
    messagingSenderId: process.env.APP_MESSAGINGSENDERID,
    appId: process.env.APP_APPID,
    measurementId: process.env.APP_MEASUREMENTID
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const auth = fb.auth();
const store = fb.firestore();

export { auth, store }