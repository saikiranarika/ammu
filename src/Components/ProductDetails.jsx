import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../Pages/Data";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <h2>Product not found!</h2>;

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
