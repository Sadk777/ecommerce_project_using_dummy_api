import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; 

const ProductCard = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
