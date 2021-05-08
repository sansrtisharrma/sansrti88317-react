import firebase from "firebase/app";
import "firebase/auth";
 
 // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQFkwbbPFB4YKcDFoJ35qGX0EOEjDUuQc",
    authDomain: "ecommerce-37e40.firebaseapp.com",
    projectId: "ecommerce-37e40",
    storageBucket: "ecommerce-37e40.appspot.com",
    messagingSenderId: "1069810091204",
    appId: "1:1069810091204:web:c9bcbefe4be911bcbf3591"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export const auth=firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();