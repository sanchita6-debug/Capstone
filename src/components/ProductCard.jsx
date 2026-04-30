import React from "react";

function ProductCard({ product }) {

  function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let exists = cart.find((item) => item.id === product.id);

    if (exists) {
      exists.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart");
  }

  return (
    <div className="card">

      <img src={product.image} />

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <button onClick={addToCart}>
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;