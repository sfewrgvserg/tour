// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcdui5isvDMjhrsQXv1gckw4a9j-8_SaA",
  authDomain: "work-sample-89291.firebaseapp.com",
  projectId: "work-sample-89291",
  storageBucket: "work-sample-89291.appspot.com",
  messagingSenderId: "844702183111",
  appId: "1:844702183111:web:c4bcbc6a6eb157841ad8e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
