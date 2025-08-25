import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        Welcome to <strong>TechVault</strong>, your one-stop shop for high-quality 
        computer accessories. We provide top-notch keyboards, mice, headsets, 
        webcams, and more to enhance your digital experience. 
      </p>

      <p>
        Our mission is to deliver the latest and most reliable tech gear at 
        affordable prices while ensuring excellent customer support.
      </p>

      <div className="about-section">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>✔ Wide range of computer accessories</li>
          <li>✔ Affordable and competitive pricing</li>
          <li>✔ Customer-first support service</li>
          <li>✔ Fast and reliable delivery</li>
        </ul>
      </div>

      <div className="about-section">
        <h3>Our Vision</h3>
        <p>
          We aim to be a trusted tech brand that makes digital life easier 
          and more enjoyable for everyone.
        </p>
      </div>
    </div>
  );
}

export default About;
