import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { updateProduct } from '../service/productService';

const UpdateProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });
  const [query, setQuery] = useState('');

  const handleChange = async (e) =>{
    setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
  }
  const handleSearch = async () => {
    try {
      const product = await updateProduct(query); 
      setFormData({
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image
      });
      console.log('Product loaded!');
    } catch (err) {
      console.log('Product not found.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(formData);
      console.log('Product updated successfully!');
    } catch (error) {
      console.log('Failed to update product.');
    }
  };

  return (
    <div className="d-flex justify-content-center vh-100 align-items-center">
      <div className="card p-3" style={{ width: '100%', maxWidth: '400px' }}>
        <h2>Update Product</h2>
        <div className="d-flex mb-3">
          <input
            type="text"
            placeholder="Search by ID or Name"
            className="form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="secondary" onClick={handleSearch}>
            Search
          </Button>
        </div>

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
              type="url"
              name="image"
              placeholder="Image URL"
              className="form-control"
              style={{width:"600", height:"400"}}
              value={formData.image}
              onChange={handleChange}
              required
            />
            <label>Images</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
