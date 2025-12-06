import { useState} from "react";
import { useNavigate, Link } from "react-router-dom";

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
    <h2 className="text-center">Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="form-control"
         value={formData.username}
        onChange={handleChange}
      />
      <label>Username</label>
      </div>
      <div className="form-floating mb-3">
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="form-control"
        value={formData.password}
        onChange={handleChange}
      />
      <label>Password</label>
      </div>
      <button type="submit" className="btn btn-primary w-100">Login</button>
    </form>
    <div className="card-footer text-muted text-center mt2">Did not sign up yet?<Link to="/register">Register</Link></div>
    </div>
    </div>
  );
}

export default Login;
