import React from "react";

function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full p-2 border rounded-lg mb-4"
    />
  );
}

export default SearchBar;
