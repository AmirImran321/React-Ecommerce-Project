import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate("/checkout");
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
};

export default Cart;
