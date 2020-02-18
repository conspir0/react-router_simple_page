import React from "react";
import "./Product.css";

const Product = props => {
  const { title } = props.product;

  return (
    <div className="product">
      <div className="product__title">{title}</div>
    </div>
  );
};

export default Product;
