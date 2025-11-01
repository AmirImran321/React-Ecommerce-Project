import {useState} from 'react';

const UpdateProduct = () =>{

    const [formData,setFormData] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image: ''
    })

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return(
        <div>
            <h2>Update Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-floating">
                    <input 
                        type="text" 
                        placeholder="Title"
                        className="form-control"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <label>Title</label>
                </div>
                <div className="form-floating">
                    <input 
                        type="number" 
                        placeholder="Price"
                        className="form-control"
                        value={formData.price}
                        onChange={handleChange}
                    />
                    <label>Price</label>
                </div>
                <div className="form-floating">
                    <input 
                        type="text" 
                        placeholder="Description"
                        className="form-control"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <label>Description</label>
                </div>
                <div className="form-floating">
                    <input 
                        type="text" 
                        placeholder="Category"
                        className="form-control"
                        value={formData.category}
                        onChange={handleChange}
                    />
                    <label>Category</label>
                </div>
                <div className="form-floating">
                    <input 
                        type="file" 
                        placeholder="Image"
                        className="form-control"
                        value={formData.image}
                        onChange={handleChange}
                    />
                    <label>Image</label>
                </div>
            </form>
        </div>
    )
}

export default UpdateProduct;