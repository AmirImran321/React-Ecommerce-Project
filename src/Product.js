import { useState, useEffect } from "react";
import {getProducts} from "./service/productService.js";

const Product = () => {
  const [products, setProducts] = useState([]);

   useEffect(() => {
   const fetchProducts = async () => {
     try {
       const products = await getProducts();
        setProducts(products);
        console.log("Fetched products:", products);
     } catch (error) {
       console.error("Error fetching products:", error);
     }
   };

   fetchProducts();
 }, []);

    return (
        <div className="container mt-4">
            <h2>Product List</h2>
            <div className="row">
                <div className="col-md-8 mb-3">
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Search products..."
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <select className="form-select">
                        <option>Categories</option>
                        <option>Men's Clothing</option>
                        <option>Jewelry</option>
                        <option>Electronics</option>
                        <option>Women's Clothing</option>
                     </select>
            </div>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
            {products.length === 0 ? (
                <p>No products available</p>
            ) : (
                products.map(product => (
                    <div className="col" key={product.id}>
                        <div className="card h-100 w-100 p-3">
                            <img
                                src={product.image}
                                className="card-img-top"
                                alt={product.title}
                                style={{objectFit:"contain", height:"200px",backgroundColor:"#9e6c8bff"}}
                            />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <div className="card-footer bg-white border-1">
                                <p>Rating: {product.rating.rate} <i className="bi bi-star-fill"></i> ({product.rating.count} reviews)</p>
                                <p><strong>Price: RM {product.price.toFixed(2)}</strong></p>
                                <button
                                    className="btn btn-success w-100" >
                                    Add to Cart
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
        </div>
        
    );
};

export default Product;