import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

    useEffect(() => {
        api.get("/products")
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <div className="container mt-4">
            <h2>Product List</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
            {products.length === 0 ? (
                <p>No products available</p>
            ) : (
                products.map(product => (
                    <div className="col" key={product.id}>
                        <div className="card h-30">
                            <img
                                src={product.images[0]}
                                className="card-img-top"
                                alt={product.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => navigate(`/products/${product.id}`)}
                                >
                                    View Details
                                </button>
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