import Navbar from "../../components/common/Navbar";
import Hero from "../../components/sections/Hero";
import "./ProductDetail.css";

import chilli from "../../assets/images/chilli.jpg";

export default function ProductDetail() {
  return (
    <>
      <Navbar />

      <Hero title="Product" breadcrumb="Home / Shop / Product" />

      <section className="product-detail">
        <div className="product-image">
          <img src={chilli} alt="Organic Cayenne Powder" />
        </div>

        <div className="product-info">
          <h1>Organic Cayenne Powder</h1>

          <div className="rating">★★★★★ <span>(34 Reviews)</span></div>

          <p className="price">$9.99</p>

          <p className="description">
            We paired peppery turmeric with ancho chilies and cinnamon,
            adding citrus notes for authentic flavor inspired by traditional
            spice houses.
          </p>

          <div className="options">
            <label>Size</label>
            <select>
              <option>Jar – 1/2 Cup</option>
              <option>Bag – 8 Oz</option>
            </select>
          </div>

          <button className="add-to-cart">Add to Cart</button>
        </div>
      </section>
    </>
  );
}
