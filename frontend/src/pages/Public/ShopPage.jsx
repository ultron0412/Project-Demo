import { useState } from "react";
import "./ShopPage.css";

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

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sort, setSort] = useState("newest");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // FILTER + SORT
  const filteredProducts = PRODUCTS
    .filter(p => selectedCategory === "All" || p.category === selectedCategory)
    .sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      return b.id - a.id;
    });

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert("Added to cart");
  };

  const toggleWishlist = (product) => {
    wishlist.find(i => i.id === product.id)
      ? setWishlist(wishlist.filter(i => i.id !== product.id))
      : setWishlist([...wishlist, product]);
  };

  return (
    <div className="shop-layout">

      {/* SIDEBAR */}
      <aside className="shop-sidebar">
        <h3>Categories</h3>
        {["All", "Whole", "Powder", "Masala", "Traditional"].map(cat => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}

        <h3>Sort By</h3>
        <select onChange={e => setSort(e.target.value)}>
          <option value="newest">Newest</option>
          <option value="name">Name</option>
        </select>

        <p className="count">
          Cart: {cart.length} | Wishlist: {wishlist.length}
        </p>
      </aside>

      {/* PRODUCTS */}
      <section className="shop-products">
        <h1>Our Spices</h1>

        <div className="shop-grid">
          {filteredProducts.map(item => (
            <div className="shop-card" key={item.id}>
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>

              <div className="actions">
                <button onClick={() => setSelectedProduct(item)}>View</button>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
                <button onClick={() => toggleWishlist(item)}>
                  {wishlist.find(i => i.id === item.id) ? "♥" : "♡"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT DETAIL MODAL */}
      {selectedProduct && (
        <div className="modal">
          <div className="modal-box">
            <img src={selectedProduct.img} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <p>Premium quality Nepalese spice.</p>
            <button onClick={() => addToCart(selectedProduct)}>Add to Cart</button>
            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
