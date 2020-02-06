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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
