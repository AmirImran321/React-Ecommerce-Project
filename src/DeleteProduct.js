import {useState} from 'react';
import { Toast } from 'react-bootstrap';
import { deleteProduct } from './service/productService';

const DeleteProduct = () =>{

    const [productId, setProductId] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('');

    const handleDelete = async () => {
        try {
            await deleteProduct(productId);
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