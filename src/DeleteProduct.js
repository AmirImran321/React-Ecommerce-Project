import {useState} from 'react';
import { Toast } from 'react-bootstrap';
import { deleteProduct } from './service/productService';
import { Button } from 'react-bootstrap';

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
            <h2 className="mb-3 text-center">Delete Product</h2>
            <input
                type="text"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                placeholder="Enter Product ID"
            />
            <Button variant="danger" className='d-block my-3 mx-auto' onClick={handleDelete}>Delete</Button>

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