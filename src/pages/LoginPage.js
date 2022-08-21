import LoginForm from "../components/loginForm/LoginForm";

import google from "../resources/img/google.svg";
import "./loginPage.scss";

const LoginPage = () => {
  return (
    <div className="login_page">
      <div className="login_page-container">
        {/* check login */}
        <h2 className="login_page-title">Login</h2>
        <LoginForm />
        <div className="login_page-or">or</div>
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
