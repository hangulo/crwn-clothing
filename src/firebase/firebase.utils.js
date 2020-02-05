import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDiWvxL91ksoz4qXmC649MJETsL6OTQDv8",
  authDomain: "crwn-db-7d58c.firebaseapp.com",
  databaseURL: "https://crwn-db-7d58c.firebaseio.com",
  projectId: "crwn-db-7d58c",
  storageBucket: "crwn-db-7d58c.appspot.com",
  messagingSenderId: "645339619308",
  appId: "1:645339619308:web:e0995842f6dfc020b8aac9",
  measurementId: "G-M64SF466EQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
