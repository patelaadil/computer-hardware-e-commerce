import React from 'react'
import './Home.css';
import product from './produts.json'

function Product() {
  const mouseProducts = product.mouse;

  return (
    <div className='Product'>
      <div className="prod_gallary">
        <h2>MICE</h2>
        <div className="product-grid">
         {mouseProducts.map((img) => (
            <div className="product-card">
              <img src={img.path} alt="mouse" />
              <h3>{img.name}</h3>
              <p>₹{img.price}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="prod_gallary">
        <h2>MICE</h2>
        <div className="product-grid">
         {mouseProducts.map((img) => (
            <div className="product-card">
              <img src={img.path} alt="mouse" />
              <h3>{img.name}</h3>
              <p>₹{img.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product

