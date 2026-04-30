import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Checkout() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  function placeOrder() {
    localStorage.removeItem("cart");
    setCart([]);
    alert("Order Placed Successfully 🎉");
  }

  return (
    <div>
      <Navbar />

      <h2 className="page-title">Checkout</h2>

      <div className="checkout-container">

        {/* LEFT SIDE - ORDER SUMMARY */}
        <div className="checkout-box">

          <h3>Order Summary</h3>

          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div className="checkout-item" key={item.id}>
                <p>{item.name}</p>
                <p>₹{item.price} x {item.qty}</p>
              </div>
            ))
          )}

          <hr />

          <h3>Total: ₹{total}</h3>

        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="checkout-box">

          <h3>Shipping Details</h3>

          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Phone Number" />

          <button className="place-btn" onClick={placeOrder}>
            Place Order
          </button>

        </div>

      </div>
    </div>
  );
}

export default Checkout;