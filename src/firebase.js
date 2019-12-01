import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4PAiUxCGZ58JoP9fkPlJ_yE4eVeKm4UM",
    authDomain: "project-05-f1231.firebaseapp.com",
    databaseURL: "https://project-05-f1231.firebaseio.com",
    projectId: "project-05-f1231",
    storageBucket: "project-05-f1231.appspot.com",
    messagingSenderId: "589380734853",
    appId: "1:589380734853:web:6f3cb4c64d4b7b86337eec"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;