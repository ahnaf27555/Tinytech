import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import ProductCard from "./components/ProductCard";
import { products } from "./products";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesCategory;
  });
  const messengerPage = "61579885843067"; // your FB Page ID
  const messengerLink = `https://m.me/${messengerPage}`;


  return (
    <div>
      <Navbar onSearch={setSearch} />
      <div className="container my-4">
        <Filters setCategory={setCategory} />
        <div className="row g-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
              <ProductCard product={product} messengerLink={messengerLink} cardLink={product.cardLink}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
