import {useState} from 'react';

const AddProduct = () =>{

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
         <div className="d-flex justify-content-center vh-100 align-items-center">
            <div className="card p-3" style={{width:"100%", maxWidth:"400px" }}>
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input 
                        type="text" 
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
                        placeholder="Category"
                        className="form-control"
                        value={formData.category}
                        onChange={handleChange}
                    />
                    <label>Category</label>
                </div>
                <div className="form-floating mb-3">
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
    </div>
    )
}

export default AddProduct;