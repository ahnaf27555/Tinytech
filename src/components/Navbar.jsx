import React from "react";

/*function Navbar({ onSearch }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container d-flex align-items-center justify-content-between">
        <a
          className="navbar-brand fw-bold"
          onClick={() => window.location.href = "/Tinytech/"}
          style={{ cursor: "pointer" }}
        >
          TINYTECH
        </a>  
        <form className="d-flex ms-auto" style={{ maxWidth: "200px" }}>
          <input
            type="search"
            placeholder="Search products..."
            className="form-control"
            onChange={(e) => onSearch(e.target.value)}
          />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;*/


function Navbar({ onSearch }) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ position: "sticky", top: 0, zIndex: 1100 }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <a
          className="navbar-brand fw-bold"
          onClick={() => (window.location.href = "/Tinytech/")}
          style={{ cursor: "pointer" }}
        >
          TINYTECH
        </a>
        <form className="d-flex ms-auto" style={{ maxWidth: "200px" }}>
          <input
            type="search"
            placeholder="Search products..."
            className="form-control"
            onChange={(e) => onSearch(e.target.value)}
          />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;

