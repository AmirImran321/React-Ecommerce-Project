import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

    useEffect(() => {
        api.get("/products")
            .then(res => {
                setProducts(res.data);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            {products.length === 0 ? (
                <p>No products available</p>
            ) : (
                <ul>
                    {products.map(product => (
                        <li key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
                            {product.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Product;