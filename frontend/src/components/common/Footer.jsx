import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <div className="navbar">
        {/* LOGO */}
        <div className="navbar-logo">
          <h2>XSTORE</h2>
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
          <span className="icon">🔍</span>
          <span className="icon">👤</span>
          <span className="icon">❤️</span>
          <span className="icon">🛒</span>
        </div>
      </div>
    </header>
  );
}
