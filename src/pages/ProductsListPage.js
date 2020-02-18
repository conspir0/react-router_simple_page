import React from "react";
import Product from "../components/Product/Product";
import { Link } from "react-router-dom";

const products = [
  { id: 1, title: "Wheat beer", path: "wheat" },
  { id: 2, title: "Pils beer", path: "pils" },
  { id: 3, title: "Porter beer", path: "porter" }
];

const ProductsListPage = () => {
  return products.map(product => {
    return (
      <Link key={product.id} to={`/products/${product.path}`}>
        <Product product={product} />
      </Link>
    );
  });
};

export default ProductsListPage;
