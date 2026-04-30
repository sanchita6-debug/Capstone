import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  function removeItem(id) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  function increaseQty(id) {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  function decreaseQty(id) {
    const updatedCart = cart.map((item) =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div>
      <Navbar />

      <h2 className="page-title">Your Cart</h2>

      <div className="cart-container">

        {cart.length === 0 ? (
          <h3 className="empty-cart">Cart is Empty</h3>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>

                <div className="item-info">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-price">₹{item.price}</p>
                </div>

                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.id)}>-</button>

                  <span>{item.qty}</span>

                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>

              </div>
            ))}

            <div className="total-box">
              Total: ₹{total}
            </div>

            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default Cart;