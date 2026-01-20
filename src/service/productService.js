import api from '../api';

export const addProduct = async (productData) => {
  const response = await api.post('/api/products', productData);
  return response;
}

export const updateProduct = async (id, productData) => {
  const response = await api.put(`/api/products/${id}`, productData);
  return response;
}

export const deleteProduct = async (id) => {
   await api.delete(`/api/products/${id}`);
   return true;
}
export const getAllProducts = async () => {
  const response = await api.get('/api/products');
  return response;
}


export const getProductById = async (id) => {
  const response = await api.get(`/api/products/${id}`);
  return response;
}
