import { useEffect, useState } from "react";
import "./Wishlist.css";

export default function Wishlist() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div className={`wishlist-page ${show ? "show" : ""}`}>
      <h2>Your Wishlist</h2>
      <p>No items added yet.</p>
    </div>
  );
}
