import {useState} from 'react';
import {Container, Nav, Col, Row, Button} from 'react-bootstrap';

const Navbar = ()=>{
    const [expanded, setExpanded] = useState(false);
    
    const toggle = () => setExpanded(!expanded);
    const untoggle = () => setExpanded(false);

    return(
        <Container fluid>
            <Button className="mb-3" onClick={toggle}>
                {expanded ? 'Collapse' : 'Expand'}
            </Button>
            <Row>
                <Col md={2} className="bg-light-vh-100">
                    <Nav className ="flex-column p-3">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Product</Nav.Link>
                        <Nav.Link href="#">Cart</Nav.Link>
                        <Nav.Link href="#">Profile</Nav.Link>
                        <Nav.Link href="#">Logout</Nav.Link>
                    </Nav>
                </Col>
                <Col md={10}>
                    <h2>Main Content Area</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar;