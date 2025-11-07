import { Table, Button } from 'react-bootstrap';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import api from './api';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate("/checkout");
    };

    const handleRemoveFromCart = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    useEffect(() => {
        api.get("/products")
            .then(res => {
                setCartItems(res.data);
            })
            .catch(error => {
                console.error("Error fetching cart items:", error);
            });
    }, []);

    return (
        <div className='d-flex justify-content-center vh-100 align-items-center'>
        <div className='container mt-3'>
            <h2>Your Cart</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.length === 0 ? (
                        <tr>
                            <td colSpan="3">No items in cart</td>
                        </tr>
                    ) : (
                        cartItems.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>
                                    <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
            <Button variant="primary" onClick={handleCheckout}>Checkout</Button>
        </div>
        </div>
    );
};

export default Cart;
