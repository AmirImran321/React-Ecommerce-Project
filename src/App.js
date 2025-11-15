import React from 'react';
import { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import Homepage from './Homepage';
import {CartProvider} from './CartContext';
import Sidebar from './Sidebar';
import AddProduct from './AddProduct'; 
import Product from './Product';
import Profile from './Profile';
import DeleteProduct from './DeleteProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartPage from './CartPage';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Router>
      <CartProvider>
      <div className="App">
        <div className="layout d-flex">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="container mt-3" style={{ marginLeft: collapsed ? '80px' : '200px', transition: 'margin-left 0.3s' }}>
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/add_product" element={<AddProduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/delete_product" element={<DeleteProduct />} />
        </Routes>
      </div>
      <footer className="bg-dark text-light text-center py-3">
        <p>&copy; {new Date().getFullYear()} E-Commerce App</p>
      </footer>
      </div>
      </div>
      </CartProvider>
    </Router>
  );
}

export default App;
