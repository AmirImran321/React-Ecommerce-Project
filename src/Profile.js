import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

const Profile =()=>{
    const {pic,setPic} = useState("");
    const [error,setError] = useState("");
    const [formData,setFormData] = useState({
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

    return(
        <div className="d-flex justify-content-center vh-100 align-items-center">
        <div className="card p-3" style={{width:"100%", maxWidth:"400px"}}>
        <h2 className="text-center">Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
            <img src={pic} alt="Profile" />
            <input
                type="file"
                onChange={(e) => setPic(URL.createObjectURL(e.target.files[0]))}
            />
        </div>
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
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
            />
            <label>E-mail</label>
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
        </div>
        </div>
    );
    
}

export default Profile;