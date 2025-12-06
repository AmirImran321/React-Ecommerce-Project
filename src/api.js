import axios from "axios";

const api = axios.create({
  baseURL: `https://fakestoreapi.com`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  // You can add authorization headers or other custom headers here
  return config;
});

api.interceptors.response.use(
  (response) => {
    // You can handle responses globally here
    return response;
  },
  (error) => {
    // You can handle errors globally here
    return Promise.reject(error);
  }
);

export default api;