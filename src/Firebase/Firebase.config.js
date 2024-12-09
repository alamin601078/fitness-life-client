// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDtN9yLQMGIxsuuQaK2vj5ylzqwvRylrSU",
//   authDomain: "assingment-twelve.firebaseapp.com",
//   projectId: "assingment-twelve",
//   storageBucket: "assingment-twelve.appspot.com",
//   messagingSenderId: "573378285469",
//   appId: "1:573378285469:web:f560f4152a14a4643d2974",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;