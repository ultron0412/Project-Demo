import "./Hero.css";
import heroBg from "../../assets/images/spices-bg.jpg";

export default function Hero({ title, breadcrumb, buttonText }) {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <span className="hero-subtitle">
            Your Perfect Secret Ingredient
          </span>

          <h1>{title}</h1>

          <p className="hero-breadcrumb">{breadcrumb}</p>

          {buttonText && (
            <button className="hero-btn">{buttonText}</button>
          )}
        </div>
      </div>
    </section>
  );
}
