import React, { useState, useEffect } from 'react';
import './Home.css';
import bg from './images/bg.png'
import keyboard from './images/keyboard.jpg';
import mouse from './images/mouse.jpg';
import headset from './images/headset.jpg';
import webcam from './images/webcam.jpg';
import logitech from './images/Logitech_logo.svg.png';
import razer from './images/razer-logo-png_seeklogo-323721.png';
import hp from './images/HP_logo_2008.svg.png';
import dell from './images/Dell_Logo.svg.png';
import adata from './images/ADATA-1.jpg';
import asus from './images/ASUS1.jpg';
import banner from './images/Banner-ADATA.jpg';

function Home() {
  const images = [bg,keyboard, mouse, headset, webcam];
  const slide_imgs = [adata,asus,banner];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
      prevIndex === slide_imgs.length - 1 ? 0 : prevIndex + 1
    );
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);


  return (
    <div className="Home">
      <section
        className="hero"
        style={{
          backgroundImage: `url(${slide_imgs[currentIndex]})`,
        }}
      >
        {/* <div className="overlay">
          <p style={{fontSize:'50px'}}>Upgrade Your Setup</p>
          <p>Latest Accessories Delivered to Your Doorstep</p>
        </div> */}
      </section>

        
      <section className="prod_gallary">
        <h2>TOP SELLING</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src={keyboard} alt="Gaming Keyboard" />
            <h3>Gaming Keyboard</h3>
            <p>₹2,499</p>
          </div>
          <div className="product-card">
            <img src={mouse} alt="Ergonomic Mouse" />
            <h3>Ergonomic Mouse</h3>
            <p>₹1,299</p>
          </div>
          <div className="product-card">
            <img src={headset} alt="Surround Headset" />
            <h3>Surround Headset</h3>
            <p>₹3,499</p>
          </div>
          <div className="product-card">
            <img src={webcam} alt="HD Webcam" />
            <h3>HD Webcam</h3>
            <p>₹2,099</p>
          </div>
        </div>
      </section>

      <section className="prod_gallary">
        <h2>HOT DEALS</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src={keyboard} alt="Gaming Keyboard" />
            <h3>Gaming Keyboard</h3>
            <p>₹499</p>
          </div>
          <div className="product-card">
            <img src={mouse} alt="Ergonomic Mouse" />
            <h3>Ergonomic Mouse</h3>
            <p>₹299</p>
          </div>
          <div className="product-card">
            <img src={headset} alt="Surround Headset" />
            <h3>Surround Headset</h3>
            <p>₹699</p>
          </div>
          <div className="product-card">
            <img src={webcam} alt="HD Webcam" />
            <h3>HD Webcam</h3>
            <p>₹599</p>
          </div>
        </div>
      </section>

      <section className="featured-brands">
        <h2>Featured Brands</h2>
        <div className="brand-grid">
          <div className="brand-card">
            <img src={logitech} alt="Logitech" />
          </div>
          <div className="brand-card">
            <img src={razer} alt="Razer"/>
          </div>
          <div className="brand-card">
            <img src={hp} alt="HP"/>
          </div>
          <div className="brand-card">
            <img src={dell} alt="Dell" />
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;


