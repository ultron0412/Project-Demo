import { NavLink, useNavigate } from "react-router-dom";
import {
  Search,
  User,
  Heart,
  ShoppingCart,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [cartCount] = useState(2); // demo count

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar-wrapper");
      if (window.scrollY > 80) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar premium-navbar">
      <header className="navbar-wrapper">
        <div className="navbar">
          {/* LOGO */}
          <div className="navbar-logo" onClick={() => navigate("/")}>
            <h2>SUDISU</h2>
          </div>

          {/* MENU */}
          <nav className="navbar-menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* ICONS */}
          <div className="navbar-icons">
            <Search size={18} onClick={() => setShowSearch(true)} />

            {/* USER DROPDOWN */}
            <div className="user-dropdown">
              <User size={18} />
              <div className="dropdown-menu">
                <p>Login</p>
                <p>Register</p>
              </div>
            </div>

            {/* WISHLIST */}
            <Heart
              size={18}
              onClick={() => navigate("/wishlist")}
            />

            {/* CART */}
            <div
              className="cart-icon"
              onClick={() => navigate("/cart")}
            >
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="cart-badge">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>
      </nav>

      {/* SEARCH MODAL */}
      {showSearch && (
        <div className="search-modal">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search products..."
            />
            <button
              className="close-btn"
              onClick={() => setShowSearch(false)}
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
