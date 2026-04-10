import React, { useContext } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
import { ProductContext } from '../context/ProductContext';

const AddProductForm = () => {
  const { dispatch } = useContext(ProductContext);
  const { values, handleChange, resetForm } = useForm({ name: '', price: '', inStock: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name.trim() || !values.price) return;
    
    const newProduct = {
      id: Date.now(),
      name: values.name,
      price: parseFloat(values.price),
      inStock: values.inStock,
      image: ''
    };
    
    dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
    resetForm();
  };

  return (
    <Card className="shadow-sm">
      <Card.Header as="h5" className="bg-primary text-white">Add New Product</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" name="name" value={values.name} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price ($)</Form.Label>
            <Form.Control type="number" name="price" value={values.price} onChange={handleChange} required min="0" step="0.01" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Check type="checkbox" name="inStock" label="Available in Stock" checked={values.inStock} onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">Add Product</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddProductForm;

