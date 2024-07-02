import React, { useState, useEffect } from 'react';
import { getProducts, getCategories } from '../services/api'; // Import getCategories
import './Home.css'; 

import ProductCard from '../components/ProductCard';
import Search from '../components/Search';
import CategoryList from '../components/CategoryList';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]); // State for categories

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setFilteredProducts(data);
    };

    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data); // Set categories state
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const handleSearch = (query) => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSelectCategory = (category) => {
    const filtered = products.filter(product => product.category === category);
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <CategoryList categories={categories} onSelectCategory={handleSelectCategory} />
      <div>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
