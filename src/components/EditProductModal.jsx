import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
import { ProductContext } from '../context/ProductContext';

const EditProductModal = ({ product, onClose }) => {
  const { dispatch, darkMode } = useContext(ProductContext);
  const { values, handleChange } = useForm(product);

  const handleSave = () => {
    dispatch({ type: 'UPDATE_PRODUCT', payload: { ...values, price: parseFloat(values.price) } });
    onClose();
  };

  return ReactDOM.createPortal(
    <Modal show onHide={onClose} centered contentClassName={darkMode ? 'bg-dark text-white' : ''}>
      <Modal.Header closeButton closeVariant={darkMode ? 'white' : ''}>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control 
              type="text" 
              name="name" 
              value={values.name} 
              onChange={handleChange} 
              className={darkMode ? 'bg-secondary text-white' : ''}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control 
              type="number" 
              name="price" 
              value={values.price} 
              onChange={handleChange}
              className={darkMode ? 'bg-secondary text-white' : ''}
            />
          </Form.Group>
          <Form.Check 
            type="checkbox" 
            name="inStock" 
            label="In Stock" 
            checked={values.inStock} 
            onChange={handleChange} 
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="primary" onClick={handleSave}>Save Changes</Button>
      </Modal.Footer>
    </Modal>,
    document.body
  );
};

export default EditProductModal;