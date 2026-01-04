import { useState } from "react";
import { ShopProvider } from "../../context/ShopContext";
import ShopSidebar from "../../components/shop/ShopSidebar";
import ProductGrid from "../../components/shop/ProductGrid";
import "../../styles/shop.css";

export default function Shop() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("newest");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ShopProvider>
      <div className="shop-wrapper fade-in">
        <button className="mobile-filter" onClick={() => setSidebarOpen(true)}>
          Filters
        </button>

        <ShopSidebar
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
          open={sidebarOpen}
          close={() => setSidebarOpen(false)}
        />

        <ProductGrid category={category} sort={sort} />
      </div>
    </ShopProvider>
  );
}
