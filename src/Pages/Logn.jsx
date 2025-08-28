import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="button">Login</button>
          </form>
          <p className="signup-text">
            Don’t have an account? <Link to='/register'>Register</Link>
          </p>
        </div>
      </div>

      <footer className="auth-footer">
        <p>© 2025 TechVault. All rights reserved.</p>
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms</a>
      </footer>
    </div>
  );
}

export default Login;



