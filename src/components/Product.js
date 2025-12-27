import { useState, useEffect } from "react";
import { getAllProducts } from "../service/productService.js";
import { Toast, ToastContainer } from "react-bootstrap";
import { useCart } from "../CartContext.js";
import { filterBySearchAndCategory } from "../utils/searchUtils.js";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { addToCart } = useCart();

  const categories = [...new Set(products.map(product => product.category))];

  const handleAddToCart = product => {
    addToCart(product);
    setToastMessage("Product added to cart!");
    setShowToast(true);
    console.log("Adding to cart:", product);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        setProducts(products);
        console.log("Fetched products:", products);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = filterBySearchAndCategory(
    products,
    searchTerm,
    selectedCategory,
    ["title", "description"]
  );

  return (
    <div className="container mt-4">
      <h2>Product List</h2>
      <div className="row">
        <div className="col-md-8 mb-3">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search products..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-4 mb-3">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            <option value="">Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {filteredProducts.length === 0 ? (
          <p>No products available</p>
        ) : (
          filteredProducts.map(product => (
            <div className="col" key={product._id || product.id}>
              <div className="card h-100 w-100 p-3">
                <img
                  src={product.image || "https://via.placeholder.com/200"}
                  className="card-img-top"
                  alt={product.title}
                  style={{
                    objectFit: "contain",
                    height: "200px",
                    backgroundColor: "#9e6c8bff"
                  }}
                />

                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>

                  <div className="card-footer bg-white border-1">
                    {product.rating ? (
                      <p>
                        Rating: {product.rating.rate} ⭐ ({product.rating.count}{" "}
                        reviews)
                      </p>
                    ) : (
                      <p>Rating: N/A</p>
                    )}

                    <p>
                      <strong>Price: RM {product.price.toFixed(2)}</strong>
                    </p>

                    <button
                      className="btn btn-success w-100"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <ToastContainer
        style={{ position: "absolute", bottom: 0, right: 0 }}
        className="p-3"
      >
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg="success"
          text="white"
        >
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Product;
