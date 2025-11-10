import {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

const ItemModal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" style={{display: 'block', position: 'relative', justifyContent: 'center'}} onClick={handleShow}>
            View Details
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src="" alt="" className="img-fluid" />
                <p>description</p>
                <p><strong>Price: RM </strong></p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">
                    Add to Cart
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
};

export default ItemModal;