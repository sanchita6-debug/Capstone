// GET CART
export function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// ADD TO CART
export function addToCart(product) {
  if (!product) return;

  let cart = getCart();

  let existing = cart.find((item) => item.id === product.id);

  if (existing) {
    // safer update (no direct mutation issue)
    cart = cart.map((item) =>
      item.id === product.id
        ? { ...item, qty: item.qty + 1 }
        : item
    );
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

// REMOVE ITEM
export function removeFromCart(id) {
  let cart = getCart().filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
}

// CLEAR CART
export function clearCart() {
  localStorage.removeItem("cart");
}