import React from "react";

function ProductCard({ product, cardLink, messengerLink }) {
  const handleCardClick = () => {
    window.open(cardLink, "_blank"); // Opens card link in new tab
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Prevents the card click
    window.open(messengerLink, "_blank"); // Opens Messenger link
  };
  return (
    <div className="card h-100 shadow-sm"
      style={{ cursor: "pointer" }}
      onClick={handleCardClick}>
      <img
        src={product.image}
        alt={product.name}
        className="card-img-top product-img"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted">{product.description}</p>
        <h6 className="fw-bold mb-3">৳ {product.price}</h6>
        <button
          onClick={handleButtonClick}
          className="btn btn-primary mt-auto"
        >
          Contact on Messenger
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
