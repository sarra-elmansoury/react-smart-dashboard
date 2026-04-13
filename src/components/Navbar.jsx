import React, { useContext } from 'react';
import { Navbar as BsNavbar, Container, Button } from 'react-bootstrap';
import { ProductContext } from '../context/ProductContext';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ProductContext);

  return (
    <BsNavbar bg={darkMode ? 'secondary' : 'primary'} variant="dark" className="mb-4 shadow">
      <Container>
        <BsNavbar.Brand>Inventory Dashboard</BsNavbar.Brand>
        <Button 
          variant={darkMode ? 'light' : 'outline-light'} 
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;

