// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1jfGAnepwpjqMXItuOL2G3anrpHTpaD0",
  authDomain: "crwn-clothing-db-23b39.firebaseapp.com",
  projectId: "crwn-clothing-db-23b39",
  storageBucket: "crwn-clothing-db-23b39.appspot.com",
  messagingSenderId: "142122415847",
  appId: "1:142122415847:web:8bd020797cb95de8ef1442",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);