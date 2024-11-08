import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" className="navbar-custom">
      <Container>
        {/* Left side: Proviz logo */}
        <Navbar.Brand href="#home" className="logo-text">
          Proviz School of AI
        </Navbar.Brand>

        {/* Right side: Login, About */}
        <Nav className="ml-auto">
          <Nav.Link href="#login" className="navbar-links">Login</Nav.Link>
          <Nav.Link href="#about" className="navbar-links">About</Nav.Link>
          
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

