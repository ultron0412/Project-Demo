export default function ShopSidebar({ category, setCategory, sort, setSort, open, close }) {
  const categories = ["All", "Whole", "Powder", "Masala", "Traditional"];

  return (
    <aside className={`shop-sidebar ${open ? "open" : ""}`}>
      <button className="close-btn" onClick={close}>✕</button>

      <h3>Categories</h3>
      {categories.map(cat => (
        <button
          key={cat}
          className={category === cat ? "active" : ""}
          onClick={() => setCategory(cat)}
        >
          {cat}
        </button>
      ))}

      <h3>Sort By</h3>
      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="newest">Newest</option>
        <option value="name">Name</option>
      </select>
    </aside>
  );
}
