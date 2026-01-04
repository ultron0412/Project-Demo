import { useNavigate } from "react-router-dom";
import "./Products.css";

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
  { id: 1, name: "Chilli", img: chilli },
  { id: 2, name: "Chilli Powder", img: chilliPowder },
  { id: 3, name: "Cumin Seeds", img: cumin },
  { id: 4, name: "Turmeric Powder", img: turmeric },
  { id: 5, name: "Garam Masala", img: garam },
  { id: 6, name: "Mixed Spices", img: mix },
  { id: 7, name: "Meat Masala", img: meat },
  { id: 8, name: "Traditional Cooking Spices", img: cookingWomen },
];

export default function Products() {
  const navigate = useNavigate();

  return (
    <section className="shop-page show">
      <div className="shop-container">
        <h1 className="shop-title">Our Spices</h1>
        <p className="shop-subtitle">
          Authentic Nepalese spices crafted with purity and tradition
        </p>

        <div className="shop-grid">
          {products.map((item) => (
            <div className="shop-card" key={item.id}>
              <div className="shop-image">
                <img src={item.img} alt={item.name} />

                <div className="shop-overlay">
                  <button
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    View Product
                  </button>
                  <button className="buy-btn">Buy Now</button>
                </div>
              </div>

              <h3 className="shop-name">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
