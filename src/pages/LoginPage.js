import { Link } from "react-router-dom";

import google from "../resources/img/google.svg";
import "./loginPage.scss";

const LoginPage = () => {
  return (
    <div className="login_page">
      <div className="login_page-container">
        {/* check login */}
        <h2 className="login_page-title">Login</h2>
        <form action="login_page" className="login_page-form">
          <input
            name="username"
            className="login_page-input"
            type="text"
            placeholder="Email or Username"
            required
          />
          <input
            name="password"
            className="login_page-input"
            type="text"
            placeholder="Password"
            required
          />

          {/* <Link to="/chat"> */}
          <input className="login_page-btn" type="submit" value="Enter" />
          {/* </Link> */}
          <div className="login_page-or">or</div>
        </form>
        <button className="login_page-google">
          <img src={google} alt="google" />
          <span style={{ color: "#4285F4" }}>G</span>
          <span style={{ color: "#EB4335" }}>O</span>
          <span style={{ color: "#FBBC05" }}>O</span>
          <span style={{ color: "#4285F4" }}>G</span>
          <span style={{ color: "#34A853" }}>L</span>
          <span style={{ color: "#EB4335" }}>E</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
