// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvW9V_rZsixL411vjjF5k9pqVaeBnT07Q",
    authDomain: "forest-client-review.firebaseapp.com",
    projectId: "forest-client-review",
    storageBucket: "forest-client-review.appspot.com",
    messagingSenderId: "876624283508",
    appId: "1:876624283508:web:858d327de7dbe7166bce21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;