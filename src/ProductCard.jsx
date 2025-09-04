import React from "react";

function ProductCard({ product }) {
  const messengerPage = "61579885843067"; // your FB Page ID
  const messengerLink = `https://m.me/${messengerPage}?ref=Hi! I'm interested in buying: ${encodeURIComponent(product.name)}`;

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="card-img-top product-img"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted">{product.description}</p>
        <h6 className="fw-bold mb-3">৳ {product.price}</h6>
        <a href={messengerLink} target="_blank" rel="noreferrer" className="btn btn-primary mt-auto">
          Contact on Messenger
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
