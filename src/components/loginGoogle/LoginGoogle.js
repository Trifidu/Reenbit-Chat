import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "@leecheuk/react-google-login";
import { gapi } from "gapi-script";

import "./loginGoogle.scss";
import google from "../../resources/img/google.svg";

const LoginGoogle = () => {
  const navigate = useNavigate();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  useEffect(() => {});

  const handleFailure = (result) => {
    console.log("FAILED", result);
  };

  const handleLogin = async (googleData) => {
    console.log("SUCCESS ", googleData);
    localStorage.setItem("GoogleLogin", JSON.stringify(googleData));
    navigate("/chat");
  };

  return (
    <>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={"single_host_origin"}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="login_page-google"
          >
            <img src={google} alt="google" />
            <span style={{ color: "#4285F4" }}>G</span>
            <span style={{ color: "#EB4335" }}>O</span>
            <span style={{ color: "#FBBC05" }}>O</span>
            <span style={{ color: "#4285F4" }}>G</span>
            <span style={{ color: "#34A853" }}>L</span>
            <span style={{ color: "#EB4335" }}>E</span>
          </button>
        )}
      />
    </>
  );
};

export default LoginGoogle;
