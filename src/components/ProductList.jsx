   import React, { useContext, useMemo, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ProductContext } from '../context/ProductContext';
import ProductCard from './ProductCard';
import EditProductModal from './EditProductModal';

const ProductList = () => {
  const { state } = useContext(ProductContext);
  const [editingProduct, setEditingProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return state.products.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(state.searchQuery.toLowerCase());
      const matchStock = state.filterStock === 'all' ? true : 
                         state.filterStock === 'inStock' ? p.inStock : !p.inStock;
      return matchSearch && matchStock;
    });
  }, [state.products, state.searchQuery, state.filterStock]);

  return (
    <>
      <Row className="g-3">
        {filteredProducts.map(product => (
          <Col key={product.id} md={6}>
            <ProductCard product={product} onEdit={() => setEditingProduct(product)} />
          </Col>
        ))}
      </Row>
      {editingProduct && (
        <EditProductModal 
          product={editingProduct} 
          onClose={() => setEditingProduct(null)} 
        />
      )}
    </>
  );
};

export default ProductList;