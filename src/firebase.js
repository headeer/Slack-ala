// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyB7EcR0KumNwWf7EMdUlBbJpedvCmlBCvI",
    authDomain: "slack-ala.firebaseapp.com",
    projectId: "slack-ala",
    storageBucket: "slack-ala.appspot.com",
    messagingSenderId: "1040686126837",
    appId: "1:1040686126837:web:586d014dbe898dc2c997bc",
    measurementId: "G-Q1QJE28H1F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, db, provider};
