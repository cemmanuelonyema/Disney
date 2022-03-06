import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVnRTFN7NxmtgM2-DkG47wc_4fyE2IH4I",
  authDomain: "disneyclone-ce79d.firebaseapp.com",
  projectId: "disneyclone-ce79d",
  storageBucket: "disneyclone-ce79d.appspot.com",
  messagingSenderId: "89579594154",
  appId: "1:89579594154:web:47d92e5ec91c65cd68cbd3",
};

const app = initializeApp(firebaseConfig);

// Auth through google mail
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

export { auth, provider };
