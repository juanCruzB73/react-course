// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAnIFQeo9PSDSikwwOrrE0y7aokAPvznUY",

  authDomain: "react-course-49fba.firebaseapp.com",

  projectId: "react-course-49fba",

  storageBucket: "react-course-49fba.appspot.com",

  messagingSenderId: "115217036892",

  appId: "1:115217036892:web:c363e5fbbda692a99dd899",

  measurementId: "G-23FSXB684F"

};


// Initialize Firebase

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth=getAuth(FirebaseApp);
export const FirebaseDB=getFirestore(FirebaseApp)