// firebaseConfig.js
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRZa5oPxcVDnn8bzE4fQzhWH6mUiaLpRk",
    authDomain: "smartwork-dce7a.firebaseapp.com",
    databaseURL: "https://smartwork-dce7a-default-rtdb.firebaseio.com",
    projectId: "smartwork-dce7a",
    storageBucket: "smartwork-dce7a.firebasestorage.app",
    messagingSenderId: "25524215709",
    appId: "1:25524215709:web:b1425b80be7797c5f39974",
    measurementId: "G-BSM1K5XR61"
};

// Initialize Firebase
export default firebaseConfig;
