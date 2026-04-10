import React, { createContext } from 'react';
import { useProducts } from '../hooks/useProducts';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { state, dispatch, deleteProduct } = useProducts();
  return (
    <ProductContext.Provider value={{ state, dispatch, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};