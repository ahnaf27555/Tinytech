import React from "react";

/*function Filters({ setCategory }) {
  return (
    <div className="d-flex flex-wrap justify-content-center mb-4 sticky-top bg-white py-2" style={{ zIndex: 1000, overflowX: "auto", whiteSpace: "nowrap" }}>
      <button className="btn btn-outline-dark mx-2" onClick={() => setCategory("All")}>All</button>
      <button className="btn btn-outline-dark mx-2" onClick={() => setCategory("animeAccessories")}>Anime Accessories</button>
      <button className="btn btn-outline-dark mx-2" onClick={() => setCategory("modelCar")}>Model Car</button>
      <button className="btn btn-outline-dark mx-2" onClick={() => setCategory("actionFigures")}>Action Figures</button>
      <button className="btn btn-outline-dark mx-2" onClick={() => setCategory("keycaps")}>keycaps</button>
    </div>
  );
}

export default Filters;*/
import "./Filters.css";

function Filters({ setCategory }) {
  const categories = [
    { key: "All", label: "All" },
    { key: "animeAccessories", label: "Anime Accessories" },
    { key: "modelCar", label: "Model Car" },
    { key: "actionFigures", label: "Action Figures" },
    { key: "keycaps", label: "Keycaps" },
  ];

  return (
    <div
      className="filter-box"
      style={{
        position: "sticky",
        top: "56px", // height of navbar
        zIndex: 1000,
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat.key}
          className="filter-btn"
          onClick={() => setCategory(cat.key)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export default Filters;


