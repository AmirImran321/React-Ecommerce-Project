import { useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { updateProduct, getProductById } from '../service/productService';
import {useParams} from 'react-router-dom';

const UpdateProduct = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try { 
        const product = await getProductById(id);
        console.log("Fetched product:", product);
        setFormData(product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
  };
  fetchProduct();
}, [id]);

  const handleChange = (e) => {
    try{
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    } catch (error) {
      console.error("Error updating form data:", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(id,formData);
      console.log('Product updated successfully!');
    } catch (error) {
      console.log('Failed to update product.');
    }
  };

  return (
    <div className="d-flex justify-content-center vh-100 align-items-center">
      <div className="card p-3" style={{ width: '100%', maxWidth: '400px' }}>
        <h2>Update Product</h2>

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
          <Button
            variant="primary"
            className="w-100"
            type="submit">
            Update Product
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
