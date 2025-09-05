import React from "react";

function Filters({ setCategory }) {
  return (
    <div className="d-flex flex-wrap justify-content-center mb-4">
      <button className="btn btn-outline-dark mx-2" onClick={() => setCategory("All")}>All</button>
      <button className="btn btn-outline-dark mx-2" onClick={() => setCategory("animeAccessories")}>Anime Accessories</button>
      <button className="btn btn-outline-dark mx-2" onClick={() => setCategory("modelCar")}>Model Car</button>
      <button className="btn btn-outline-dark mx-2" onClick={() => setCategory("actionFigures")}>Action Figures</button>
      <button className="btn btn-outline-dark mx-2" onClick={() => setCategory("keycaps")}>keycaps</button>
    </div>
  );
}

export default Filters;
