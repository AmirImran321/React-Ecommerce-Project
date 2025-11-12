import {useState} from 'react';
import api from './service/api';
import { Toast } from 'react-bootstrap';

const DeleteProduct = () =>{

    const [productId, setProductId] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('');

    const handleDelete = async () => {
        try {
            await api.delete(`/products/${productId}`);
            setToastMessage('Product deleted successfully');
            setToastType('success');
            setShowToast(true);
            setProductId('');
        } catch (error) {
            setToastMessage('Failed to delete product');
            setToastType('error');
            setShowToast(true);
        }
    };

    return (
        <div>
            <h2>Delete Product</h2>
            <input
                type="text"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                placeholder="Enter Product ID"
            />
            <button onClick={handleDelete}>Delete</button>

            <Toast
                show={showToast}
                onClose={() => setShowToast(false)}
                bg={toastType}
                autohide
                delay={3000}
            >
                <Toast.Body>{toastMessage}</Toast.Body>
            </Toast>
        </div>
    );
};

export default DeleteProduct;