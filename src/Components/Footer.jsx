import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-column">
        <h3>TechVault</h3>
        <p>Your one-stop store for computer accessories and gadgets.</p>
      </div>

      <div className="Footer-column">
        <h3>Quick Links</h3>
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="Footer-column">
        <h3>Follow Us</h3>
        <div className="Footer-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      <div className="Footer-bottom">
        &copy; 2025 TechVault. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
