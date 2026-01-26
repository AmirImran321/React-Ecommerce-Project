import { useState, useEffect } from 'react';
import { Toast, Button, Modal} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { deleteProduct, getAllProducts } from '../service/productService';

const DeleteProduct = () => {
  const [products, setProducts] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getAllProducts();
        if (Array.isArray(fetchedProducts)) {
          setProducts(fetchedProducts);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };
    fetchProducts();
  }, []);


  const confirmDelete = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleDelete = async () => {
    try {
      await deleteProduct(selectedProduct.id || selectedProduct._id);
      setProducts(products.filter(p => (p.id || p._id) !== (selectedProduct.id || selectedProduct._id)));
      setToastMessage('Product deleted successfully');
      setToastType('success');
      setShowToast(true);
    } catch (error) {
      setToastMessage('Failed to delete product');
      setToastType('danger');
      setShowToast(true);
    } finally {
      setShowModal(false);
      setSelectedProduct(null);
    }
  };

  return (
    <div className="container mt-4">
        <h2>Delete Products</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          products.map(product => (
            <div className="col" key={product._id || product.id}>
              <div className="card h-100 w-100 p-3">
                <img
                  src={product.image || "https://via.placeholder.com/200"}
                  className="card-img-top"
                  alt={product.title}
                  style={{ objectFit: "contain", height: "200px", backgroundColor: "gray" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <div className="card-footer bg-white border-1">
                    <p><strong>Price: RM {product.price.toFixed(2)}</strong></p>
                    <NavLink
                      className="border-0 p-0 text-decoration-none"
                      to={`/update_product/${product.id}`}
                    >
                      <Button variant="secondary" className="w-100 mb-2">
                      Update Product
                      </Button>
                    </NavLink>
                    <Button
                      variant="danger"
                      className="w-100"
                      onClick={() => confirmDelete(product)}
                    >
                      Delete Product
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <p>Are you sure you want to delete <strong>{selectedProduct.title}</strong>?</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="danger" onClick={handleDelete}>Yes, Delete</Button>
        </Modal.Footer>
      </Modal>

      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        bg={toastType}
        autohide
        delay={3000}
        className="position-fixed bottom-0 end-0 m-3"
      >
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
    </div>
  );
};

export default DeleteProduct;
