import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [error,setError] = useState("");
    const [formData, setFormData] = useState({
        username:"",
        email:"",
        password:"",
        re_password:""
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
        <div className="card p-4">
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
                type="email"
                placeholder="Email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
            />
            <label>E-mail</label>
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
            <div className="form-floating">
            <input
                type="password"
                placeholder="Re-enter Password"
                className="form-control"
                value={formData.re_password}
                onChange={handleChange}
            />
            <label>Re-enter Password</label>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
        </div>
        </div>
    );
};

export default Register;
