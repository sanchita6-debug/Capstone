import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getWishlist, removeFromWishlist } from "../utils/wishlist";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setWishlist(getWishlist());
  }, []);

  function remove(id) {
    removeFromWishlist(id);
    setWishlist(getWishlist());
  }

  return (
    <div>
      <Navbar />

      <h2 className="page-title">Wishlist ❤️</h2>

      <div className="cart-container">

        {wishlist.length === 0 ? (
          <h3 style={{ textAlign: "center" }}>
            Wishlist is empty 💔
          </h3>
        ) : (
          wishlist.map((item) => (
            <div className="cart-item" key={item.id}>

              <div className="item-info">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>

              <button
                className="remove-btn"
                onClick={() => remove(item.id)}
              >
                Remove
              </button>

            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default Wishlist;