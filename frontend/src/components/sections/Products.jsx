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

const spices = [
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
  return (
    <section className="our-spices">
      <h2>Our Spices</h2>

      <div className="spices-grid">
        {spices.map((item) => (
          <div className="spice-card" key={item.id}>
            <div className="spice-img-wrapper">
              <img src={item.img} alt={item.name} />

              {/* HOVER OVERLAY */}
              <div className="spice-overlay">
                <button
                  className="spice-btn"
                  onClick={() => alert(`View ${item.name}`)}
                >
                  View
                </button>

                <button
                  className="spice-btn spice-btn-buy"
                  onClick={() => alert(`Buy ${item.name}`)}
                >
                  Buy
                </button>
              </div>
            </div>

            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
