import { useEffect, useState } from "react";
import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";
import "./Wishlist.css";

// TEMP DATA (replace with context later)
const wishlistItems = [
  {
    id: 1,
    name: "Garam Masala",
    image: "/src/assets/images/garam.jpg",
  },
  {
    id: 2,
    name: "Chilli Powder",
    image: "/src/assets/images/chillipowder.jpg",
  },
];

export default function Wishlist() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <section className={`wishlist-page ${show ? "show" : ""}`}>
      <h2>Your Wishlist ❤️</h2>

      {wishlistItems.length === 0 ? (
        <div className="wishlist-empty">
          <FaHeart />
          <p>Your wishlist is empty</p>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="wishlist-info">
                <h4>{item.name}</h4>

                <div className="wishlist-actions">
                  <button className="cart-btn">
                    <FaShoppingCart /> Add to Cart
                  </button>
                  <button className="remove-btn">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
