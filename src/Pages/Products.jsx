import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { addToCart } from "../utils/cart";
import WishlistBtn from "../components/WishlistBtn";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/beauty")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      <h2 className="page-title">Cosmetics</h2>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search cosmetics..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="product-container">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ height: "150px" }}
            />

            <h3>{"Kraizy Special - " + product.title}</h3>
            <p>₹{product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>

            <WishlistBtn product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;