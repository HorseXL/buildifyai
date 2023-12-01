// import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
// const provider = new GoogleAuthProvider();
const provider = new GoogleAuthProvider();

export { auth, provider };