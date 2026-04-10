import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ProductProvider } from './context/ProductContext';
import Navbar from './components/Navbar';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <ProductProvider>
      <Navbar />
      <Container>
        <Row>
          <Col lg={4} md={12} className="mb-4">
            <AddProductForm />
          </Col>
          <Col lg={8} md={12}>
            <ProductList />
          </Col>
        </Row>
      </Container>
    </ProductProvider>
  );
}

export default App;