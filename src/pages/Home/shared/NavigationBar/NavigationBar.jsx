import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import ActiveLink from "./ActiveLink/ActiveLink";


const NavigationBar = () => {
  return (
    <div>
      <Navbar
        className="mt-3 mb-3 p-3 "
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand className="fs-2" href="#home">Delicious-Food-Recipe</Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link className="text-decoration-none text-light fs-5 " to="/">
                Home
              </Link>

              <Link to="/blog" className="text-decoration-none ms-3 text-light fs-5">
                Blog
              </Link>
            </Nav>
            <Nav>
              <div className="me-3">
                <Nav.Link href="#deets">
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                </Nav.Link>
              </div>

              <Link to="/login">
                <Button to="/login" variant="secondary">Login</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
