import React from "react";
import { products } from "./Data";
import ProductCard from "../Components/ProductCard";

const HomePage = ({ searchTerm }) => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {filteredProducts.length === 0 && <p>No products found.</p>}
    </div>
  );
};

export default HomePage;
