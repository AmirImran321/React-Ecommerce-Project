import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({collapsed, setCollapsed}) => {
  const toggleSidebar = () => setCollapsed(!collapsed);
  return (
    <Navbar
      expand="md"
      bg="dark"
      variant="dark"
      className="flex-column vh-100 position-fixed align-items-center"
      style={{ width: collapsed ? '80px' : '200px', transition: 'width 0.3s' }}
    >
      <Container fluid className="flex-column p-0">
        <Button
          aria-controls="basic-navbar-nav"
          onClick={toggleSidebar}
          className="mb-3"
        >
          {collapsed ? <i className="bi bi-chevron-right"></i> : <i className="bi bi-chevron-left"></i>}
        </Button>
  
          <Nav className="flex-column">
            <Nav.Link as={NavLink} to="/" className="d-flex align-items-center sidebar-link">
              <i className="bi bi-house-fill" style={{ padding: "5px", fontSize: "20px" }}></i>
              {!collapsed && <span>Homepage</span>}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/product" className="d-flex align-items-center sidebar-link">
              <i className="bi bi-collection-fill" style={{ padding: "5px", fontSize: "20px" }}></i>
              {!collapsed && <span>Product</span>}
            </Nav.Link>
             <Nav.Link as={NavLink} to="/add_product" className="d-flex align-items-center sidebar-link">
             <i className="bi bi-bag-plus-fill" style={{ padding: "5px", fontSize: "20px" }}></i>
              {!collapsed && <span>Add Product</span>}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart" className="d-flex align-items-center sidebar-link">
              <i className="bi bi-basket3-fill" style={{ padding: "5px", fontSize: "20px" }}></i>
              {!collapsed && <span>Cart</span>}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/profile" className="d-flex align-items-center sidebar-link">
              <i className="bi bi-person-fill" style={{ padding: "5px", fontSize: "20px" }}></i>
              {!collapsed && <span>Profile</span>}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/logout" className="d-flex align-items-center sidebar-link">
              <i className="bi bi-box-arrow-right" style={{ padding: "5px", fontSize: "20px" }}></i>
              {!collapsed && <span>Logout</span>}
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    );
};

export default Sidebar;
