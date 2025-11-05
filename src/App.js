import React from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import Homepage from './Homepage';
import Cart from './Cart';
import Sidebar from './Sidebar';
import AddProduct from './AddProduct'; 
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path ="/product" element={<AddProduct />}/>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
