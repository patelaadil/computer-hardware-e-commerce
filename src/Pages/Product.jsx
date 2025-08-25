import React from 'react'
import './Home.css';
import product from './produts.json'

function Product() {
  const all_prod = product.all_prod;

   const handleAddToCart = (product) => {
    alert(`${product.name} added to cart! 🛒`);
  };

  return (
    <div className='Product'>

      <div className="prod_gallary">
        <h2>ALL PROD</h2>
        <div className="product-grid">
         {all_prod.map((img) => (
            <div className="product-card">
              <img src={img.path} alt="mouse" />
              <h3>{img.name}</h3>
              <p>₹{img.price}</p>
              <button onClick={() => handleAddToCart(img)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Product

