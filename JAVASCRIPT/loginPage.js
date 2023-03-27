import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCNcGme-wyzNj6VyFWzybjP6ITcN4o9aNw",
  authDomain: "login-8f10b.firebaseapp.com",
  databaseURL: "https://login-8f10b-default-rtdb.firebaseio.com",
  projectId: "login-8f10b",
  storageBucket: "login-8f10b.appspot.com",
  messagingSenderId: "694948084982",
  appId: "1:694948084982:web:d6613b022030a9366c40d7",
  measurementId: "G-61RP2B0H3M"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

signIn.addEventListener("click", (e) => {
  let email = document.getElementById("Email").value;
  let password = document.getElementById("Password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("login successful");
      document.getElementById("loginForm").reset();
      console.log(user);
      window.location.href ="./components/userProfile.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      document.getElementById("loginForm").reset();
    });
});
