import api from '../api';

export const addProduct = async (productData) => {
  const {data} = await api.post('/products', productData);
  return data;
}

export const updateProduct = async (id, productData) => {
  const {data} = await api.put(`/products/${id}`, productData);
  return data;
}

export const deleteProduct = async (id) => {
   await api.delete(`/products/${id}`);
   return true;
}
export const getAllProducts = async () => {
  const {data} = await api.get('/products');
  console.log('Raw data:', data);
  return data;
}

export const getProductById = async (id) => {
  const {data} = await api.get(`/products/${id}`);
  return data;
}
