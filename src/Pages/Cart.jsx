import { useEffect, useState } from "react";
import "./Cart.css";

function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    sessionStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleIncrease = (id) => {
    const newCart = cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    updateCart(newCart);
  };

  const handleDecrease = (id) => {
    const newCart = cart
      .map(item =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter(item => item.qty > 0);
    updateCart(newCart);
  };

  const handleRemove = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    updateCart(newCart);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
              <p>Qty: {item.qty}</p>
            </div>
            <div className="cart-item-controls">
              <button onClick={() => handleIncrease(item.id)}>+</button>
              <button onClick={() => handleDecrease(item.id)}>-</button>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CartPage;

