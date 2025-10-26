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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
