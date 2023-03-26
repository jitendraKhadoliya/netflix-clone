import React, { useRef } from "react";
import "./signUpPage.css";
import { auth, googleProvider } from "../../config/Firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import google_logo from "../../assets/google-logo.png";

const SignUpPage = () => {
  // i will use useref hook for capturing the data from form tag because using this hook i can choose html elements
  const emailref = useRef(null);
  const passwordref = useRef(null);

  // for preventing refresh when i change button we will use
  const register = async (e) => {
    e.preventDefault();
    // here i will signup with email and password using  firebase method
    try {
      await createUserWithEmailAndPassword(
        auth,
        emailref.current.value,
        passwordref.current.value
      );
      console.log(auth.currentUser);
    } catch (err) {
      alert(err.message);
    }
  };
  // i will also change to the prevent behaviour for signin button

  const signIn = async (e) => {
    e.preventDefault();
    // here i will sign in using signwithemailandpassword
    try {
      // i will sign in here
      await signInWithEmailAndPassword(
        auth,
        emailref.current.value,
        passwordref.current.value
      );
      console.log(auth.currentUser);
    } catch (err) {
      alert(err.message);
    }
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();

    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="signUpPage">
      <form>
        <h2>Sign In</h2>
        <input type="email" ref={emailref} placeholder="email" />
        <input type="password" ref={passwordref} placeholder="password" />
        <button type="submit" onClick={signIn} className="signIn__btn">
          Sign In
        </button>
        <button
          type="submit"
          onClick={signInWithGoogle}
          className="google__btn"
        >
          <img src={google_logo} alt="google-logo" className="google__logo" />
          <span> Login With Google</span>
        </button>

        <h4>
          <span className="signUpPage__gray">New to NetFlix? </span>
          <span className="signUpPage__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpPage;
