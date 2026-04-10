import React, { useRef, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const SearchBar = ({ searchTerm, setSearchTerm, filterStock, setFilterStock }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Form className="mb-4">
      <Row className="g-3">
        <Col md={8}>
          <Form.Control
            type="text"
            placeholder="Search by product name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            ref={inputRef}
          />
        </Col>
        <Col md={4} className="d-flex align-items-center">
          <Form.Check
            type="checkbox"
            label="In Stock Only"
            checked={filterStock}
            onChange={(e) => setFilterStock(e.target.checked)}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;