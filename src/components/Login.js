import React from "react";
import { Link } from "react-router-dom";

import "../StyleSheet/login.css";
import { authen } from "../config/firebase";
import avatar from "../images/iconProfile.png";

function Login() {
  const fblogin = () => {
    var provider = new authen.FacebookAuthProvider();
    authen
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        // var credential = result.credential;

        // The signed-in user info.
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // var accessToken = credential.accessToken;
      })
      .catch((error) => {
        // Handle Errors here.
        var errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account use
      });
  };
  return (
    <div className="login_container">
      <div className="login">
        <div className="cross_button_container">
          <Link to="/">
            {" "}
            <button className="crox">X</button>
          </Link>
        </div>
        <div className="login_img_container">
          <img alt="Avatar" src={avatar} className="login_img" />
          <span className="loginimgText">
            Save all your favorite items in one place
          </span>
        </div>
        <div className="optionBtnContainer">
          <button type="submit">Continue with phone</button>
          <button className type="submit" onClick={fblogin}>
            Continue with facebook
          </button>
          <button className="" type=" submit">
            Continue with google
          </button>
          <button type="submit">Continue with email</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
