import {useState} from "react";
import {useNavigate, Link} from "react-router-dom";

const Register = () => {
    const [error,setError] = useState("");
    const [formData, setFormData] = useState({
        username:"",
        password:"",
        re_password:""
    });

    const navigate = useNavigate();
    
    const handleChange = (e) =>{
         setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) 
        setError("");
       
    }

    const handleSubmit = async (e) => {
       e.preventDefault();
       const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        'Content-Type': "application/json",
        body: JSON.stringify(formData)
        } );    
        const data = await res.json();
        if(res.status === 201){
            alert("Registration Successful! Please login.");
            navigate("/login");
        } else {
            setError(data.message || "Registration failed");
        }
    };

    return (
        <div className="d-flex justify-content-center vh-100 align-items-center">
        <div className="card p-3" style={{width:"100%", maxWidth:"400px"}}>
        <h2 className="text-center">Register</h2>
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
            <div className="form-floating mb-3">
            <input
                type="password"
                name="re_password"
                placeholder="Re-enter Password"
                className="form-control"
                value={formData.re_password}
                onChange={handleChange}
            />
            <label>Re-enter Password</label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
        <div className="card-footer text-muted text-center mt3">Already have an account?<Link to="/login">Login</Link></div>
        </div>
        </div>
    );
};

export default Register;
