import { useShop } from "../../context/ShopContext";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useShop();

  const liked = wishlist.find(i => i.id === product.id);

  return (
    <div className="shop-card">
      <div className="card product-card">

      <img src={product.img} alt={product.name} />
      <h4>{product.name}</h4>

      <div className="actions">
        <button onClick={() => addToCart(product)}>Add</button>
        <button onClick={() => toggleWishlist(product)}>
          {liked ? "♥" : "♡"}
        </button>
      </div>
      </div>
    </div>
  );
}
