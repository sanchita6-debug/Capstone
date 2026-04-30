import React from "react";
import { addToWishlist, getWishlist } from "../utils/wishlist";

function WishlistBtn({ product }) {
  function handleWishlist() {
    let wishlist = getWishlist();

    let exists = wishlist.find((item) => item.id === product.id);

    if (!exists) {
      addToWishlist(product);
      alert("Added to Wishlist ❤️");
    } else {
      alert("Already in Wishlist ❤️");
    }
  }

  return (
    <button className="wish-btn" onClick={handleWishlist}>
      ❤️ Wishlist
    </button>
  );
}

export default WishlistBtn;