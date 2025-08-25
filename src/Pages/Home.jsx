import React, { useState, useEffect } from 'react';
import './Home.css';
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
  const products = [
    {
      id: 1,
      name: "Gaming Keyboard",
      price: 499,
      image: keyboard
    },
    {
      id: 2,
      name: "Ergonomic Mouse",
      price: 299,
      image: mouse
    },
    {
      id: 3,
      name: "Surround Headset",
      price: 699,
      image: headset
    },
    {
      id: 4,
      name: "HD Webcam",
      price: 599,
      image: webcam
    }
  ];

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

   const handleAddToCart = (product) => {
    alert(`${product.name} added to cart! 🛒`);
  };

  return (
    <div className="Home">
      <section
        className="hero"
        style={{
          backgroundImage: `url(${slide_imgs[currentIndex]})`,
        }}
      >
      </section>

        
      <section className="prod_gallary">
        <h2>TOP SELLING</h2>
        <div className="product-grid">
         {products.map((img) => (
            <div className="product-card">
              <img src={img.image} alt="mouse" />
              <h3>{img.name}</h3>
              <p>₹{img.price}</p>
              <button onClick={() => handleAddToCart(img)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="prod_gallary">
        <h2>HOT DEALS</h2>
        <div className="product-grid">
         {products.map((img) => (
            <div className="product-card">
              <img src={img.image} alt="mouse" />
              <h3>{img.name}</h3>
              <p>₹{img.price}</p>
              <button onClick={() => handleAddToCart(img)}>
                Add to Cart
              </button>
            </div>
          ))}
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


