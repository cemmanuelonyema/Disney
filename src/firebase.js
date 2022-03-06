import firebase from "firebase/compat/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVnRTFN7NxmtgM2-DkG47wc_4fyE2IH4I",
  authDomain: "disneyclone-ce79d.firebaseapp.com",
  projectId: "disneyclone-ce79d",
  storageBucket: "disneyclone-ce79d.appspot.com",
  messagingSenderId: "89579594154",
  appId: "1:89579594154:web:47d92e5ec91c65cd68cbd3",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Firebase database
const db = firebaseApp.firestore();

// Initialize Firebase
const auth = firebase.auth();

// Auth through google mail
const provider = new firebase.auth.GoogleAuthProvider();

// storage for images and videos
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
