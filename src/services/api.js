import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com', 
});

export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Login API Error:', error);
    throw error;
  }
};

export const register = async (credentials) => {
  try {
    const response = await api.post('/auth/register', credentials);
    return response.data;
  } catch (error) {
    console.error('Register API Error:', error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data.products;
  } catch (error) {
    console.error('Get Products API Error:', error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await api.get('/products/categories');
    return response.data; // Assuming response.data contains categories
  } catch (error) {
    console.error('Get Categories API Error:', error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Get Product by ID API Error:', error);
    throw error;
  }
};

export const addProduct = async (product) => {
  try {
    const response = await api.post('/products/add', product);
    return response.data;
  } catch (error) {
    console.error('Add Product API Error:', error);
    throw error;
  }
};

export const updateProduct = async (id, product) => {
  try {
    const response = await api.put(`/products/${id}`, product);
    return response.data;
  } catch (error) {
    console.error('Update Product API Error:', error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Delete Product API Error:', error);
    throw error;
  }
};
