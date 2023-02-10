import {initializeApp } from "firebase/app"
import {getAuth } from "firebase/auth"
import {getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDKKTPGYyUFbdKYSUDFfkPGtfrLl2erk4Y",
  authDomain: "dtd-blog-8bed5.firebaseapp.com",
  projectId: "dtd-blog-8bed5",
  storageBucket: "dtd-blog-8bed5.appspot.com",
  messagingSenderId: "155104869656",
  appId: "1:155104869656:web:c5d31c1f55cabde693326d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };