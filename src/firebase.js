import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA6j5UjlCij2bOkmjvxfhg3i91FQ7LKxbg",
    authDomain: "genx-9ff3b.firebaseapp.com",
    databaseURL: "https://genx-9ff3b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "genx-9ff3b",
    storageBucket: "genx-9ff3b.appspot.com",
    messagingSenderId: "70480359155",
    appId: "1:70480359155:web:d635add9102ff4ed2d1186",
    measurementId: "G-VP5CV624JB"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

export default db;
