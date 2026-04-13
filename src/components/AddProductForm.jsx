import React, { useContext } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
import { ProductContext } from '../context/ProductContext';

const AddProductForm = () => {
  const { dispatch, darkMode } = useContext(ProductContext);
  const { values, handleChange, resetForm } = useForm({ name: '', price: '', inStock: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name || !values.price) return;
    dispatch({ 
      type: 'ADD_PRODUCT', 
      payload: { ...values, id: Date.now(), price: parseFloat(values.price) } 
    });
    resetForm();
  };

  return (
    <Card className={`shadow-sm ${darkMode ? 'bg-secondary text-white border-light' : ''}`}>
      <Card.Header as="h5">Add Product</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control 
              type="text" 
              name="name" 
              value={values.name} 
              onChange={handleChange} 
              className={darkMode ? 'bg-dark text-white' : ''}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control 
              type="number" 
              name="price" 
              value={values.price} 
              onChange={handleChange}
              className={darkMode ? 'bg-dark text-white' : ''}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check 
              type="checkbox" 
              name="inStock" 
              label="Available" 
              checked={values.inStock} 
              onChange={handleChange} 
            />
          </Form.Group>
          <Button variant={darkMode ? 'info' : 'primary'} type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddProductForm;