import React, { useContext, useState, useMemo } from 'react';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import { ProductContext } from '../context/ProductContext';
import ProductCard from './ProductCard';
import EditProductModal from './EditProductModal';
import SearchBar from './SearchBar';

const ProductList = () => {
  const { state } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStock, setFilterStock] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return state.products.filter(product => {
      const matchName = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchStock = filterStock ? product.inStock : true;
      return matchName && matchStock;
    });
  }, [state.products, searchTerm, filterStock]);

  if (state.loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="pb-5">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterStock={filterStock}
        setFilterStock={setFilterStock}
      />
      
      {filteredProducts.length === 0 ? (
        <Alert variant="info">No products found.</Alert>
      ) : (
        <Row xs={1} md={2} xl={3} className="g-4">
          {filteredProducts.map(product => (
            <Col key={product.id}>
              <ProductCard product={product} onEdit={setEditingProduct} />
            </Col>
          ))}
        </Row>
      )}

      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductList;