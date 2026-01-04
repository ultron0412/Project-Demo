import Navbar from "../../components/common/Navbar";
import Hero from "../../components/sections/Hero";
import "./Contact.css";

import logo from "../../assets/logo/sudisu-logo.png";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Hero title="Contact Us" breadcrumb="Home / Contact" />

      {/* COMPANY HEADER */}
      <section className="company-header">
        <img src={logo} alt="Sudisu Spices Logo" />
        <h2>Sudisu Spices</h2>
        <h4>FACTORY</h4>
        <p>
          Manahari-07, Makawanpur, Nepal <br />
          <strong>Phone:</strong> 057-590436 <br />
          <strong>Email:</strong> info@fortunegroup.com.np <br />
          <strong>Website:</strong> www.sudisu.com
        </p>
      </section>

      {/* CONTACT + MAP */}
      <section className="contact-section">
        {/* LEFT: INFO + FORM */}
        <div className="contact-left">
          <div className="contact-card">
            <h3>Contact Information</h3>
            <ul>
              <li>📍 Manahari-07, Makawanpur, Nepal</li>
              <li>📞 057-590436</li>
              <li>✉️ info@fortunegroup.com.np</li>
              <li>🌐 www.sudisu.com</li>
            </ul>
          </div>

          <div className="contact-card">
            <h3>Send Us a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" />
              <textarea rows="5" placeholder="Your Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        {/* RIGHT: MAP */}
        <div className="contact-map">
          <iframe
            title="Sudisu Spices Location"
            src="https://www.google.com/maps?q=Manahari-07,Makawanpur,Nepal&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="contact-footer">
        © {new Date().getFullYear()} Sudisu Spices | All Rights Reserved
      </footer>
    </>
  );
}
