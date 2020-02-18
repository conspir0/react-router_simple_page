import React from "react";
import "./ProductDetails.css";

const ProductDetails = props => {
  return (
    <>
      <div className="product-details">
        <h1 className="product-details__title">{props.id}</h1>
      </div>
    </>
  );
};

export default ProductDetails;
