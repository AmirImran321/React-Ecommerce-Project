import React from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import Homepage from './Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router,Route,Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </Router>
  );
}
  
export default App;
