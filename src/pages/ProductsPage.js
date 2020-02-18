import React from "react";
import { Link } from "react-router-dom";
import ProductDetails from "./../components/ProductDetails/ProductDetails";
import "./ProductPage.css";

const ProductsPage = props => {
  return (
    <>
      <ProductDetails id={props.match.params.id} />
      <Link to="/products" className="btn btn--back">
        Back to products
      </Link>
    </>
  );
};

export default ProductsPage;
