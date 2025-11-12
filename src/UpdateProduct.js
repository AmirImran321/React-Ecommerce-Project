import {useState} from 'react';
import api from './service/api';
import { Toast } from 'react-bootstrap';

const UpdateProduct = () =>{

    const [formData,setFormData] = useState({
        title: '',
        price: '',
        description: '',
        category: 0,
        images: []
    })

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
    .filter(url => url.length > 0); 

  setFormData({
    ...formData,
    images: urls
  });
};

  const handleSubmit = async(e) =>{
      e.preventDefault();

        const productData = {
            title: formData.title,
            price: parseFloat(formData.price),
            description: formData.description,
            category: formData.category,
            images: formData.images
        }
        
        try{
            await api.put('/products/{id}', productData);
            Toast.success('Product updated successfully!');
        } catch (error) {
            Toast.error('Failed to update product.');
        }
            setFormData({
            title: '',
            price: '',
            description: '',
            category: 0,
            images: []
        });
    }

    return(
        <div className="d-flex justify-content-center align-items-center">
            <div className="card p-4" style={{width:"100%", maxWidth:"400px"}}>
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
                    />
                    <label>Category</label>
                </div>
                <div className="form-floating mb-3">
                    <input 
                        type="url" 
                        name="images"
                        placeholder="Images"
                        className="form-control"
                        onChange={handleChangeImages}
                    />
                    <label>Images</label>
                </div>
            </form>
            </div>
        </div>
    )
}

export default UpdateProduct;