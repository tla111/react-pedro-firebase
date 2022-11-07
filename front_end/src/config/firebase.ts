// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpVjfm-FNinV8D6QYCLkrFnU9ZpM18AjM",
    authDomain: "react-course-pedro.firebaseapp.com",
    projectId: "react-course-pedro",
    storageBucket: "react-course-pedro.appspot.com",
    messagingSenderId: "138348999668",
    appId: "1:138348999668:web:4535458908a2221ac6ffa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();