import { useState } from 'react';
import api from './api';
import { Button, Toast, ToastContainer } from 'react-bootstrap';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    categoryId: 0,
    images: []
  });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleChangeImages = (e) => {
  const urls = e.target.value
    .split(',')
    .map(url => url.trim())
    .filter(url => url.length > 0); // remove empties

  setFormData({
    ...formData,
    images: urls
  });
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      title: formData.title,
      price: parseFloat(formData.price), // ensure number
      description: formData.description,
      categoryId: Number(formData.categoryId), // ensure number
      images: formData.images // must be array of strings
    };

    try {
      await api.post('/products', productData);
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
      categoryId: '',
      images: []
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
              type="number"
              name="categoryId"
              placeholder="Category ID"
              className="form-control"
              value={formData.categoryId}
              onChange={handleChange}
              required
            />
            <label>Category ID</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="images"
              placeholder="Image URLs (comma separated)"
              className="form-control"
              value={formData.images.join(', ')}
              onChange={handleChangeImages}
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
        <Toast bg="success" show={showToast} onClose={() => setShowToast(false)}>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default AddProduct;
