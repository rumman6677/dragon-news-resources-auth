// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log('inside firebase config', import.meta.env.VITE_PASS)

const firebaseConfig = {
  // apiKey: "AIzaSyCe9YMWxb2aTrSFBNQZmSfBVUP6jPLERJo",
  // authDomain: "dragon-news-resources-8092f.firebaseapp.com",
  // projectId: "dragon-news-resources-8092f",
  // storageBucket: "dragon-news-resources-8092f.firebasestorage.app",
  // messagingSenderId: "420344212454",
  // appId: "1:420344212454:web:ea280d22e3ae3c2f0d8427"

  apiKey: import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID ,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;