import React from "react";
import { Nav, Navbar, Button  } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Chattagram Metro Rail</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Destination">Destination</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Button variant="danger">Login</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
