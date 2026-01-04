import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/sections/Hero";
import "./Products.css";

// IMAGES
import chilli from "../../assets/images/chilli.jpg";
import chilliPowder from "../../assets/images/chillipowder.jpg";
import cookingWomen from "../../assets/images/cooking women.jpg";
import cumin from "../../assets/images/cumin.jpg";
import dhaniya from "../../assets/images/dhaniya.jpg";
import garam from "../../assets/images/garam.jpg";
import meat from "../../assets/images/meat.jpg";
import mix from "../../assets/images/mix.jpg";

const allProducts = [
  {
    id: 1,
    name: "Whole Red Chilli",
    category: "Chilies",
    price: 9,
    img: chilli,
  },
  {
    id: 2,
    name: "Chilli Powder",
    category: "Chilies",
    price: 7,
    img: chilliPowder,
  },
  {
    id: 3,
    name: "Cumin Seeds",
    category: "Herbs",
    price: 6,
    img: cumin,
  },
  {
    id: 4,
    name: "Coriander (Dhaniya)",
    category: "Herbs",
    price: 5,
    img: dhaniya,
  },
  {
    id: 5,
    name: "Garam Masala",
    category: "Spice Blends",
    price: 10,
    img: garam,
  },
  {
    id: 6,
    name: "Mixed Spices",
    category: "Spice Blends",
    price: 8,
    img: mix,
  },
  {
    id: 7,
    name: "Meat Masala",
    category: "Spice Blends",
    price: 11,
    img: meat,
  },
  {
    id: 8,
    name: "Traditional Cooking Spices",
    category: "Specialty",
    price: 12,
    img: cookingWomen,
  },
];

export default function Products() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(50);

  const filteredProducts = allProducts.filter((product) => {
    return (
      (selectedCategory === "All" ||
        product.category === selectedCategory) &&
      product.price <= maxPrice
    );
  });

  return (
    <>
      <Navbar />
      <Hero title="Shop" breadcrumb="Home / Shop" />

      <section className="shop-layout">
        {/* FILTER SIDEBAR */}
        <aside className="filter-sidebar">
          <h3>Category</h3>

          {[
            "All",
            "Chilies",
            "Herbs",
            "Spice Blends",
            "Specialty",
          ].map((cat) => (
            <label key={cat} className="filter-option">
              <input
                type="radio"
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(cat)}
              />
              {cat}
            </label>
          ))}

          <h3 className="filter-title">Max Price</h3>

          <select
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          >
            <option value="50">Any</option>
            <option value="12">Under $12</option>
            <option value="10">Under $10</option>
            <option value="8">Under $8</option>
          </select>
        </aside>

        {/* PRODUCTS GRID */}
        <div className="shop-products">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-img-wrapper">
                <img src={product.img} alt={product.name} />

                {/* HOVER OVERLAY */}
                <div className="product-overlay">
                  <button
                    className="overlay-btn"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    View
                  </button>

                  <button
                    className="overlay-btn"
                    onClick={() =>
                      alert(`${product.name} added to cart (coming next)`)
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              <h4>{product.name}</h4>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
