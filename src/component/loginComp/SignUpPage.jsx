import React from "react";
import "./signUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signUpPage">
      <form>
        <h2>Sign In</h2>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Sign In</button>
        <h4>
          <span className="signUpPage__gray">New to NetFlix? </span>
          <span className="signUpPage__link">Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpPage;
