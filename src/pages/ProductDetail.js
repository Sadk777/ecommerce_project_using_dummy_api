import React, { useEffect, useState } from 'react';
import { getProductById } from '../services/api';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'; 

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {product && (
        <>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
