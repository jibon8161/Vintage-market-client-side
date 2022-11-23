// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxTQPOcguTc5gqpbOcV807AwfsIz6vJLQ",
    authDomain: "vintage-resale-market.firebaseapp.com",
    projectId: "vintage-resale-market",
    storageBucket: "vintage-resale-market.appspot.com",
    messagingSenderId: "1005756463007",
    appId: "1:1005756463007:web:3f688497e5a5aafe7e6faa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);