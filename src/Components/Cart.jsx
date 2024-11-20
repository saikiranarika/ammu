import React from "react";

const Cart = ({ cartItems, removeFromCart }) => (
  <div>
    <h1>Cart</h1>
    {cartItems.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      <ul>
        {cartItems.map((item, index) => (
          <li key={item.id} className="cart-item">
            <div>
              {item.name} - ${item.price}
            </div>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Cart;
