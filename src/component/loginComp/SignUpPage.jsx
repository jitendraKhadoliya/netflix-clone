import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from "react";
import { auth } from "../../config/firebase.js";
import "./signUpPage.css";
// import {auth} from '../../config/firebase.js'

const SignUpPage = () => {
  // i will use useref hook for capturing the data from form tag because using this hook i can choose html elements
  const emailref = useRef(null);
  const passwordref = useRef(null);

  // for preventing refresh when i change button we will use 
  const register = async (e)=>{
    e.preventDefault();
    await createUserWithEmailAndPassword(auth,emailref,passwordref)
    // here i will signup with email and password using  firebase method
    // await createUserWithEmailAndPassword(auth, emailref,passwordref)
  }
  // i will also change to the prevent behaviour for signin button

  const signIn = (e)=>{
    e.preventDefault();
  }

  return (
    <div className="signUpPage">
      <form>
        <h2>Sign In</h2>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit" onClick={signIn}>Sign In</button>
        <h4>
          <span className="signUpPage__gray">New to NetFlix? </span>
          <span className="signUpPage__link" onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpPage;
