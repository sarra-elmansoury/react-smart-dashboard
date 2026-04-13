import React, { useContext } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { ProductContext } from '../context/ProductContext';

const ProductCard = ({ product, onEdit }) => {
  const { dispatch, deleteProduct, darkMode } = useContext(ProductContext);

  return (
    <Card className={`shadow-sm ${darkMode ? 'bg-secondary text-white border-light' : ''}`}>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="h4">${product.price}</Card.Text>
        <Badge bg={product.inStock ? 'success' : 'danger'} className="mb-3">
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </Badge>
        <div className="d-flex gap-2">
          <Button variant="warning" size="sm" onClick={onEdit}>Edit</Button>
          <Button 
            variant="info" 
            size="sm" 
            onClick={() => dispatch({ type: 'TOGGLE_STOCK', payload: product.id })}
          >
            Status
          </Button>
          <Button variant="danger" size="sm" onClick={() => deleteProduct(product.id)}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;