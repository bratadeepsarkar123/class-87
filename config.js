import firebase from "firebase";

import 'firebase/auth';
import 'firebase/database'; 
import 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBxuskQvDjjOcdRuQHgJXcZAiuBmcYUwxU",
  authDomain: "storytelling-app-24bfa.firebaseapp.com",
  projectId: "storytelling-app-24bfa",
  storageBucket: "storytelling-app-24bfa.appspot.com",
  messagingSenderId: "1098934757643",
  appId: "1:1098934757643:web:dfed1bee62b2af69fe5a0e"
  };
  firebase.initializeApp( firebaseConfig );
  //export default firebaseConfig();