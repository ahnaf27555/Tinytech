import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import Filters from "./Filters";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Navbar onSearch={setSearch} />
      <div className="container my-4">
        <Filters setCategory={setCategory} />
        <div className="row g-4">
          {filtered.map((product) => (
            <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
