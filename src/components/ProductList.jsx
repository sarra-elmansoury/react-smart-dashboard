    import { useProducts } from '../hooks/useProducts';         import React, { useState, useMemo } from 'react';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import { useProducts } from '../hooks/useProducts';
import ProductCard from './ProductCard';
import EditProductModal from './EditProductModal';
import SearchBar from './SearchBar';

const ProductList = () => {
  const { state, searchTerm, setSearchTerm, filterStock, setFilterStock } = useProducts();
  const [editingProduct, setEditingProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    if (!state?.products) return [];
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
          show={!!editingProduct}
          handleClose={() => setEditingProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductList;
{editingProduct && (
  <EditProductModal
    product={editingProduct}
    show={Boolean(editingProduct)}
    handleClose={() => setEditingProduct(null)}
  />
)}
