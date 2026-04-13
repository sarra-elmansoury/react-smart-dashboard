import React, { useContext, useEffect, useRef } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { ProductContext } from '../context/ProductContext';

const SearchBar = () => {
  const { state, dispatch, darkMode } = useContext(ProductContext);
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <Row className="mb-4">
      <Col md={8}>
        <Form.Control
          ref={searchRef}
          type="text"
          placeholder="Search products..."
          value={state.searchQuery}
          onChange={(e) => dispatch({ type: 'SET_SEARCH', payload: e.target.value })}
          className={darkMode ? 'bg-dark text-white' : ''}
        />
      </Col>
      <Col md={4}>
        <Form.Select
          value={state.filterStock}
          onChange={(e) => dispatch({ type: 'SET_FILTER', payload: e.target.value })}
          className={darkMode ? 'bg-dark text-white' : ''}
        >
          <option value="all">All Products</option>
          <option value="inStock">In Stock</option>
          <option value="outOfStock">Out of Stock</option>
        </Form.Select>
      </Col>
    </Row>
  );
};

export default SearchBar;