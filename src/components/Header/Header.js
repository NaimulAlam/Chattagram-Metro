import React, { useContext } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const setLogOut = () => {
    setLoggedInUser({});
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/home">
        <Navbar.Brand>Chattagram Metro Rail</Navbar.Brand>
      </Link>
      <Navbar className='userName'>{loggedInUser.name}{loggedInUser.displayName}</Navbar>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto LinkText">
          <Link className="" to="/home">
            Home
          </Link>
          <Link to="/destination">Destination</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          {/* <Link to="/login"><Button variant="danger">Login</Button></Link> */}
          {loggedInUser.email ? (
            <Button onClick={setLogOut} variant="danger">
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button variant="danger">Login</Button>
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

