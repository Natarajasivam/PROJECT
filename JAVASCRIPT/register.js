import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase,set,ref} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword
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
const database = getDatabase(app);
const auth = getAuth();

register.addEventListener("click", (e) => {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Account Created");
      
      set(ref(database , 'user/' + user.uid),{
        username:username,
        email:email
      })

      document.getElementById("registerForm").reset();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      document.getElementById("loginForm").reset();
    })
});
