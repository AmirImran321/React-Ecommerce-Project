import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      expand="md" 
      bg="light"
      variant="light"
      className="flex-column vh-100 position-fixed"
      style={{ width: '250px' }}
    >
      <Container fluid className="flex-column p-0">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
          className="mb-3"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
            <Nav.Link href="/"><i className="bi bi-house-fill"></i>Homepage</Nav.Link>
            <Nav.Link href="/product"><i className="bi bi-collection-fill"></i>Product</Nav.Link>
            <Nav.Link href="/cart"><i className="bi bi-basket3-fill"></i>Cart</Nav.Link>
            <Nav.Link href="/profile"><i className="bi bi-person-fill"></i>Profile</Nav.Link>
            <Nav.Link href="/logout"><i className="bi bi-box-arrow-right"></i>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Sidebar;