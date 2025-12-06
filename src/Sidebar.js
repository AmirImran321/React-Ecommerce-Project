import React from 'react';
import { Navbar, Nav, Container, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ collapsed, setCollapsed }) => {
  const toggleSidebar = () => setCollapsed(!collapsed);

  const renderNavLink = (to, iconClass, label) => {
    const linkContent = (
      <Nav.Link as={NavLink} to={to} className="d-flex align-items-center sidebar-link">
        <i className={iconClass} style={{ padding: "5px", fontSize: "20px" }}></i>
        {!collapsed && <span>{label}</span>}
      </Nav.Link>
    );

    return collapsed ? (
      <OverlayTrigger placement="right" overlay={<Tooltip id={`tooltip-${label}`}>{label}</Tooltip>}>
        {linkContent}
      </OverlayTrigger>
    ) : (
      linkContent
    );
  };

  return (
    <Navbar
      expand="md"
      bg="dark"
      variant="dark"
      className="flex-column vh-100 position-fixed align-items-center"
      style={{ width: collapsed ? '80px' : '200px', transition: 'width 0.3s' }}
    >
      <Container fluid className="flex-column p-0">
        <Button onClick={toggleSidebar} className="mb-3">
          {collapsed ? <i className="bi bi-chevron-right"></i> : <i className="bi bi-chevron-left"></i>}
        </Button>
        <Nav className="flex-column">
          {renderNavLink("/", "bi bi-house-fill", "Homepage")}
          {renderNavLink("/product", "bi bi-collection-fill", "Product")}
          {renderNavLink("/add_product", "bi bi-bag-plus-fill", "Add Product")}
          {renderNavLink("/cart", "bi bi-basket3-fill", "Cart")}
          {renderNavLink("/profile", "bi bi-person-fill", "Profile")}
          {renderNavLink("/delete_product", "bi bi-trash-fill", "Delete Product")}
          {renderNavLink("/login", "bi bi-box-arrow-right", "Logout")}
          {renderNavLink("/backend", "bi bi-person-lines-fill", "Backend")}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
