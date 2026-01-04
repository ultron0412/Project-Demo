import { useState } from "react";
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import "./Product.css";

// IMAGES
import chilli from "../../assets/images/Chilli.jpg";
import chilliPowder from "../../assets/images/chillipowder.jpg";
import cumin from "../../assets/images/cumin.jpg";
import turmeric from "../../assets/images/dhaniya.jpg";
import garam from "../../assets/images/garam.jpg";
import mix from "../../assets/images/mix.jpg";
import meat from "../../assets/images/meat.jpg";
import cookingWomen from "../../assets/images/cooking women.jpg";

const products = [
  { id: 1, name: "Chilli", category: "Whole", img: chilli },
  { id: 2, name: "Chilli Powder", category: "Powder", img: chilliPowder },
  { id: 3, name: "Cumin Seeds", category: "Powder", img: cumin },
  { id: 4, name: "Turmeric Powder", category: "Powder", img: turmeric },
  { id: 5, name: "Garam Masala", category: "Masala", img: garam },
  { id: 6, name: "Mixed Spices", category: "Masala", img: mix },
  { id: 7, name: "Meat Masala", category: "Masala", img: meat },
  { id: 8, name: "Traditional Cooking Spices", category: "Traditional", img: cookingWomen },
];

export default function Products() {
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <section className="shop-page">
      {/* SIDEBAR */}
      <aside className="shop-sidebar">
        <h3>Categories</h3>
        {["All", "Whole", "Powder", "Masala", "Traditional"].map((cat) => (
          <button
            key={cat}
            className={category === cat ? "active" : ""}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </aside>

      {/* PRODUCTS */}
      <div className="shop-content">
        <h2>Our Spices</h2>

        <div className="product-grid">
          {filtered.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="product-img">
                <img src={item.img} alt={item.name} />

                {/* HOVER ACTIONS */}
                <div className="product-actions">
                  <button title="Add to Cart">
                    <FaShoppingCart />
                  </button>
                  <button title="Wishlist">
                    <FaHeart />
                  </button>
                  <button title="Quick View">
                    <FaEye />
                  </button>
                </div>
              </div>

              <div className="product-info">
                <h4>{item.name}</h4>
                <span>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
