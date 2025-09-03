import React from 'react'
import '../Home.css';
import product from '../produts.json';

const HDD = () => {
  const all_prod = product.HDD;

 const handleAddToCart = (product) => {
  const existingCart = JSON.parse(sessionStorage.getItem("cart")) || [];

  const productIndex = existingCart.findIndex(item => item.id === product.id);

  if (productIndex !== -1) {
    existingCart[productIndex].qty += 1;
  } else {
    existingCart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.path,
      qty: 1
    });
  }

  sessionStorage.setItem("cart", JSON.stringify(existingCart));
  alert(`${product.name} added to cart! 🛒`);
};


  return (
    <div className='Product'>

      <div className="prod_gallary">
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

export default HDD

