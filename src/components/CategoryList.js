// CategoryList.js
import React, { useEffect, useState } from 'react';
import { getCategories } from '../services/api';

const CategoryList = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories(); // Assuming getCategories fetches categories from an API
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <ul>
      {categories.map(category => (
        <li key={category.slug} onClick={() => onSelectCategory(category)}>
          {category.name}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
