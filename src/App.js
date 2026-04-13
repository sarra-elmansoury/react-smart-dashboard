import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './components/Navbar';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="min-vh-100">
      <Navbar />
      <Container>
        <SearchBar />
        <Row className="g-4">
          <Col lg={4}>
            <AddProductForm />
          </Col>
          <Col lg={8}>
            <ProductList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;