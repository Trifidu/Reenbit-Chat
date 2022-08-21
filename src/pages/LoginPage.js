import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "../components/loginForm/LoginForm";
import LoginGoogle from "../components/loginGoogle/LoginGoogle";

import "./loginPage.scss";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("PasswordLogin") !== null ||
      localStorage.getItem("GoogleLogin") !== null
    ) {
      navigate("/chat");
    }
  });

  return (
    <div className="login_page">
      <div className="login_page-container">
        <h2 className="login_page-title">Login</h2>
        <LoginForm />
        <div className="login_page-or">or</div>
        <LoginGoogle />
      </div>
    </div>
  );
};

export default LoginPage;
