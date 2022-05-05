// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA445qMvRpRoUfJNmDNdb596woT5bOB1xg",
    authDomain: "warehouse-b2864.firebaseapp.com",
    projectId: "warehouse-b2864",
    storageBucket: "warehouse-b2864.appspot.com",
    messagingSenderId: "367734852951",
    appId: "1:367734852951:web:5a49b45e3067b9dca60212"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;