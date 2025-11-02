import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [error,setError] = useState("");
  const [formData, setFormData] = useState({
        username:"",
        password:"",
    });
  const navigate = useNavigate();

  const handleChange = (e) =>{
         setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) 
        setError("");
       
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="d-flex justify-content-center vh-100 align-items-center">
    <div className="card p-3" style={{width:"100%", maxWidth:"400px" }}>  
    <form onSubmit={handleSubmit}>
      <div className="form-floating">
      <input
        type="text"
        placeholder="Username"
        className="form-control"
         value={formData.username}
        onChange={handleChange}
      />
      <label>Username</label>
      </div>
      <div className="form-floating">
      <input
        type="password"
        placeholder="Password"
        className="form-control"
        value={formData.password}
        onChange={handleChange}
      />
      <label>Password</label>
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
    </div>
    </div>
  );
}

export default Login;
