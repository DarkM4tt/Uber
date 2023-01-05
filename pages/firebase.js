import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGvkTjGTPyOB9SrhfPIirFK36YhCmfGQs",
  authDomain: "rapid-ride-cd7ec.firebaseapp.com",
  projectId: "rapid-ride-cd7ec",
  storageBucket: "rapid-ride-cd7ec.appspot.com",
  messagingSenderId: "788922363580",
  appId: "1:788922363580:web:c74a90cb5c33cbecbe2ab9",
  measurementId: "G-YSXLRX2B6B",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
