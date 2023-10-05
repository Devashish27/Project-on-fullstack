// For example, in Login.js
import React from "react";
import "./Login.css"; // Import the CSS file

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        {/* Form fields */}
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
