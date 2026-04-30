// GET WISHLIST
export function getWishlist() {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
}

// ADD TO WISHLIST
export function addToWishlist(product) {
  let wishlist = getWishlist();

  let exists = wishlist.find((item) => item.id === product.id);

  if (!exists) {
    wishlist.push(product);
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

// REMOVE FROM WISHLIST
export function removeFromWishlist(id) {
  let wishlist = getWishlist().filter((item) => item.id !== id);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}