// firebaseConfig.js
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZOrCL16FpKOAiSy16YlCfUIznwiLbjw0",
  authDomain: "task-manager-acf48.firebaseapp.com",
  projectId: "task-manager-acf48",
  databaseURL: "https://task-manager-acf48-default-rtdb.firebaseio.com", // Add the databaseURL for Realtime Database
  storageBucket: "task-manager-acf48.appspot.com",
  messagingSenderId: "149595014920",
  appId: "1:149595014920:web:93560c32f0f90af2e88ebd",
  measurementId: "G-VBX1F70RLJ"
};

// Initialize Firebase
export default firebaseConfig;
