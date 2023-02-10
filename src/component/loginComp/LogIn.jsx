import React, { useState } from "react";
import "./logIn.css";
import netflixLogo from "../../assets/Netflix-logo.png";
import SignUpPage from "./SignUpPage";

const LogIn = () => {
  // it will flip the state after clicking login button

  const [signIn, setSignIn] = useState(false);

  return (
    <div className="logInPage">
      <div className="logInPage__background">
        <img
          className="logInPage__login"
          src={netflixLogo}
          alt="netflix-logo"
        />
        <button className="logInPage__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>

        <div className="loginPage__gradient" />
      </div>

      {/* here i will show login body content */}
      <div className="loginPage__body">
        {signIn ? (
          <SignUpPage />
        ) : (
          <>
            <h2>Unlimited flims, TV Programs and more.</h2>
            <h3>Watch anywhere. Cencel any Time</h3>
            <h4>
              Ready to Watch? Enter your Email to create or restart your
              membership
            </h4>

            <div className="logInPage__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="logInPage__getstarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LogIn;
