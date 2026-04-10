import React, { useContext } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { ProductContext } from '../context/ProductContext';

const ProductCard = ({ product, onEdit }) => {
  const { dispatch, deleteProduct } = useContext(ProductContext);

  return (
    <Card className="h-100 shadow-sm border-0">
      <div style={{ height: '200px', backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {product.image ? (
          <Card.Img variant="top" src={product.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <span className="text-muted">Insert Image Here</span>
        )}
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-truncate">{product.name}</Card.Title>
        <Card.Text className="mb-2">
          <strong className="fs-5">${product.price}</strong>
        </Card.Text>
        <div className="mb-3">
          <Badge bg={product.inStock ? 'success' : 'danger'}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </Badge>
        </div>
        <div className="mt-auto d-flex flex-wrap gap-2">
          <Button variant="outline-primary" size="sm" className="flex-grow-1" onClick={() => onEdit(product)}>Edit</Button>
          <Button variant="outline-warning" size="sm" className="flex-grow-1" onClick={() => dispatch({ type: 'TOGGLE_STOCK', payload: product.id })}>Stock</Button>
          <Button variant="outline-danger" size="sm" className="flex-grow-1" onClick={() => deleteProduct(product.id)}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;