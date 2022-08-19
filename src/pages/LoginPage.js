import { Link } from "react-router-dom";

import "./loginPage.scss";

const LoginPage = () => {
  return (
    <div className="login_page">
      <div className="login_page-container">
        <div className="login_page-header">
          {/* check login */}
          <h2 className="login_page-title">Login</h2>
        </div>
        <Link to="/chat">
          <button>to chat</button>
        </Link>
        {/* form > btn */}
        {/* Or */}
        {/* google login > btn */}
      </div>
    </div>
  );
};

export default LoginPage;
