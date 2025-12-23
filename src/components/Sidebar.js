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
    <div className="dropdown">
      <Button className="btn sidebar-link" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: collapsed ? "60px" : "160px" }} > 
        <div className='d-flex align-items-center'> 
          <i className="bi bi-collection-fill" style={{padding:'5px', fontSize:"20px"}}></i>
           {!collapsed && "Product"} {!collapsed && <i className="bi bi-caret-down-fill ms-auto"></i>} 
           </div> 
           </Button>
      <ul className="dropdown-menu bg-dark">
        <li>{renderNavLink("/add_product", "bi bi-bag-plus-fill", "Add Product")}</li>
        <li>{renderNavLink("/product", "bi bi-card-list", "View Products")}</li>
        <li>{renderNavLink("/delete_product", "bi bi-trash-fill", "Delete Product")}</li>
        <li>{renderNavLink("/update_product", "bi bi-pencil-square", "Update Product")}</li>
      </ul>
    </div>

    {renderNavLink("/cart", "bi bi-basket3-fill", "Cart")}
    {renderNavLink("/profile", "bi bi-person-fill", "Profile")}
    {renderNavLink("/login", "bi bi-box-arrow-right", "Logout")}
  </Nav>
</Container>

    </Navbar>
  );
};

export default Sidebar;
