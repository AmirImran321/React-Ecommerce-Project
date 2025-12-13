import { useState } from 'react';
import { addProduct } from '../service/productService';  
import { Button, Toast, ToastContainer } from 'react-bootstrap';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      title: formData.title,
      price: parseFloat(formData.price), 
      description: formData.description,
      category:formData.category,
      image: formData.image
    };

    try {
      await addProduct(productData);
      setToastMessage('Product added successfully!');
      setShowToast(true);
    } catch (error) {
      console.error('Error adding product:', error);
      setToastMessage('Failed to add product.');
      setShowToast(true);
    }

    setFormData({
      title: '',
      price: '',
      description: '',
      category: '',
      image: ''
    });
  };

  return (
    <div className="d-flex justify-content-center vh-100 align-items-center">
      <div className="card p-3" style={{ width: '100%', maxWidth: '400px' }}>
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <label>Title</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="form-control"
              value={formData.price}
              onChange={handleChange}
              required
            />
            <label>Price</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <label>Description</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="form-control"
              value={formData.category}
              onChange={handleChange}
              required
            />
            <label>Category</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="image"
              placeholder="Image URLs"
              className="form-control"
              style={{width:"600", height:"400"}}
              value={formData.image}
              onChange={handleChange}
              required
            />
            <label>Images</label>
          </div>
          <Button variant="primary" type="submit" className="w-100">
            Add Product
          </Button>
        </form>
      </div>
      <ToastContainer position="top-end" className="p-3">
        <Toast 
          bg="success" 
          text="white"
          show={showToast} 
          onClose={() => setShowToast(false)}
          delay={3000} 
          autohide
        >
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default AddProduct;
