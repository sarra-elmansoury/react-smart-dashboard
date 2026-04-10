import React from 'react';
import { Navbar as BsNavbar, Container } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BsNavbar bg="dark" variant="dark" expand="lg" className="mb-4 shadow-sm">
      <Container>
        <BsNavbar.Brand href="#home">Smart E-Commerce Dashboard</BsNavbar.Brand>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
