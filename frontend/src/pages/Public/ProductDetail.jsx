import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";

// SAME DATA SOURCE (keep consistent)
import chilli from "../../assets/images/Chilli.jpg";
import chilliPowder from "../../assets/images/chillipowder.jpg";
import cumin from "../../assets/images/cumin.jpg";
import turmeric from "../../assets/images/dhaniya.jpg";
import garam from "../../assets/images/garam.jpg";
import mix from "../../assets/images/mix.jpg";
import meat from "../../assets/images/meat.jpg";
import cookingWomen from "../../assets/images/cooking women.jpg";

const PRODUCTS = [
  { id: 1, name: "Chilli", img: chilli, desc: "Premium dried red chillies." },
  { id: 2, name: "Chilli Powder", img: chilliPowder, desc: "Finely ground chilli powder." },
  { id: 3, name: "Cumin Seeds", img: cumin, desc: "Aromatic cumin seeds." },
  { id: 4, name: "Turmeric Powder", img: turmeric, desc: "Pure turmeric powder." },
  { id: 5, name: "Garam Masala", img: garam, desc: "Traditional spice blend." },
  { id: 6, name: "Mixed Spices", img: mix, desc: "Balanced mixed spices." },
  { id: 7, name: "Meat Masala", img: meat, desc: "Perfect for meat dishes." },
  { id: 8, name: "Traditional Cooking Spices", img: cookingWomen, desc: "Authentic Nepali spices." },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) return <p style={{ padding: 100 }}>Product not found</p>;

  return (
    <div className="product-detail fade-in">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <div className="detail-card">
        <img src={product.img} alt={product.name} />
        <div>
          <h2>{product.name}</h2>
          <p>{product.desc}</p>
          <button className="buy-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
