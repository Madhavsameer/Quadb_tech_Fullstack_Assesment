import React, { useState } from "react";
import "./Cart.css"; // Add styles in a separate CSS file

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Tray Table", color: "Black", price: 19.19, quantity: 2, imgUrl: "./traytabler.png" },
    { id: 2, name: "Tray Table", color: "Red", price: 19.19, quantity: 2, imgUrl: "./traytableb.png" },
    { id: 3, name: "Table lamp", color: "gold", price: 39.0, quantity: 2, imgUrl: "./lamp.png" },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + 135; // Assuming $135 is shipping/taxes

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Cart</h2>

        <button className="close-btn">&times;</button>
      </div>

      
      <div className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imgUrl} alt={item.name} className="item-image" />
            <div className="item-details">
              <h4>{item.name}</h4>
              <p>Color: {item.color}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <div className="item-quantity">
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                disabled={item.quantity === 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
            </div>
            <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>
              &times;
            </button>
          </div>
        ))}
      </div>
      <div className="cart-bottom">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="checkout-btn">Checkout</button>
        <button className="view-cart-btn">View Cart</button>
      </div>
    </div>
  );
};

export default Cart;
