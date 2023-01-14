import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8TdSjaLuiRvnUy-9E21KqEmSF-tFgfo4",
  authDomain: "natural-ba191.firebaseapp.com",
  projectId: "natural-ba191",
  storageBucket: "natural-ba191.appspot.com",
  messagingSenderId: "571257564845",
  appId: "1:571257564845:web:a71f9fce60c36bc492a024"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

