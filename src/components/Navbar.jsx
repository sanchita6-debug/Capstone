import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">

      <h2>Kraizy Professional</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/wishlist">Wishlist</Link>
      </div>

    </div>
  );
}

export default Navbar;