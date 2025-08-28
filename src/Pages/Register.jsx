import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account</h2>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Re-enter your password" required />
          </div>
          <button type="submit" className="button">Register</button>
        </form>
        <p className="login-text">
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </div>

      <footer className="auth-footer">
        <p>© 2025 TechVault. All rights reserved.</p>
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms</a>
      </footer>
    </div>
  );
}

export default Register;
