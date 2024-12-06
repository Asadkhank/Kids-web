import React from "react";
import { useSelector } from "react-redux";

const Cart = ({ isOpen, toggleCart }) => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div
      className={`fixed top-0 z-50 right-0 h-full bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 w-1/5`}
    >
      <div className="p-4 flex items-center justify-between border-b">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={toggleCart}
        >
          ×
        </button>
      </div>
      <div className="p-4">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-4">
                <span>{item.name} ({item.color})</span>
                <span>x{item.quantity}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
