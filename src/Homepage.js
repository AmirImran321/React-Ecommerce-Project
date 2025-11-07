import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import Login from './Login';
import Register from './Register';

const Homepage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    const handleRegister = () => {   
        navigate("/register");
    };

    return (
        <div>
            {isLogin ? (
                <Login onLogin={handleLogin} />
            ) : (
                <Register onRegister={handleRegister} />
            )}
        </div>
    );
};

export default Homepage;
