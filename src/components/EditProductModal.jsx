import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Form, Button, Card } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
import { ProductContext } from '../context/ProductContext';

const EditProductModal = ({ product, onClose }) => {
  const { dispatch } = useContext(ProductContext);
  const { values, handleChange } = useForm({
    name: product.name,
    price: product.price,
    inStock: product.inStock
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'UPDATE_PRODUCT',
      payload: { ...product, name: values.name, price: parseFloat(values.price), inStock: values.inStock }
    });
    onClose();
  };

  const portalContent = (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
      <Card style={{ width: '450px', maxWidth: '95%' }} className="shadow-lg border-0">
        <Card.Header className="d-flex justify-content-between align-items-center bg-white border-bottom-0 pt-3 pb-0">
          <h5 className="mb-0">Edit Product</h5>
          <Button variant="close" onClick={onClose}></Button>
        </Card.Header>
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
            <div className="d-flex justify-content-end gap-2">
              <Button variant="light" onClick={onClose}>Cancel</Button>
              <Button variant="primary" type="submit">Save Changes</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );

  return ReactDOM.createPortal(portalContent, document.body);
};

export default EditProductModal;