import React from "react";
import HeroImg from "../assets/Hero.jpeg";

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Premium Care Begins With Us</h1>
          <p>Discover high-quality products crafted for professionals.</p>
          <a href="/products" className="hero-btn">Shop Now</a>
        </div>

        <div className="Hero-img">
          <img src={HeroImg} alt="Hero" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-box">⚡ Fast Delivery</div>
        <div className="feature-box">⭐ Premium Quality</div>
        <div className="feature-box">🔒 Secure Shopping</div>
      </section>
    </>
  );
}

export default Home;