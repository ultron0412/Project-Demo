import ProductCard from "./ProductCard";

// IMAGES
import chilli from "../../assets/images/Chilli.jpg";
import chilliPowder from "../../assets/images/chillipowder.jpg";
import cumin from "../../assets/images/cumin.jpg";
import turmeric from "../../assets/images/dhaniya.jpg";
import garam from "../../assets/images/garam.jpg";
import mix from "../../assets/images/mix.jpg";
import meat from "../../assets/images/meat.jpg";
import cookingWomen from "../../assets/images/cooking women.jpg";

const PRODUCTS = [
  { id: 1, name: "Chilli", category: "Whole", img: chilli },
  { id: 2, name: "Chilli Powder", category: "Powder", img: chilliPowder },
  { id: 3, name: "Cumin Seeds", category: "Whole", img: cumin },
  { id: 4, name: "Turmeric Powder", category: "Powder", img: turmeric },
  { id: 5, name: "Garam Masala", category: "Masala", img: garam },
  { id: 6, name: "Mixed Spices", category: "Masala", img: mix },
  { id: 7, name: "Meat Masala", category: "Masala", img: meat },
  { id: 8, name: "Traditional Cooking Spices", category: "Traditional", img: cookingWomen },
];

export default function ProductGrid({ category, sort }) {
  const filtered = PRODUCTS
    .filter(p => category === "All" || p.category === category)
    .sort((a, b) =>
      sort === "name" ? a.name.localeCompare(b.name) : b.id - a.id
    );

  return (
    <section className="shop-products">
      <h1>Our Spices</h1>

      <div className="shop-grid">
        {filtered.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
