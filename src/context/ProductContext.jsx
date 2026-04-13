import React, { createContext, useState, useEffect } from 'react';
import { useProducts } from '../hooks/useProducts';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { state, dispatch, deleteProduct } = useProducts();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-white' : 'bg-light';
  }, [darkMode]);

  return (
    <ProductContext.Provider value={{ state, dispatch, deleteProduct, darkMode, setDarkMode }}>
      {children}
    </ProductContext.Provider>
  );
};