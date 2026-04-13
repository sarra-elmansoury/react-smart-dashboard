import { useReducer, useEffect, useCallback } from 'react';
import { productReducer, initialState } from '../reducers/productReducer';

export const useProducts = () => {
  const [state, dispatch] = useReducer(productReducer, initialState, (initial) => {
    const saved = localStorage.getItem('inventory_data');
    return saved ? { ...initial, products: JSON.parse(saved), loading: false } : initial;
  });

  useEffect(() => {
    if (state.products.length === 0 && state.loading) {
      const initialData = [
        { id: 1, name: 'System Unit', price: 1200, inStock: true },
        { id: 2, name: 'Monitor 4K', price: 400, inStock: true },
        { id: 3, name: 'Mechanical Keyboard', price: 150, inStock: false }
      ];
      dispatch({ type: 'LOAD_DATA', payload: initialData });
    }
  }, [state.products.length, state.loading]);

  useEffect(() => {
    if (!state.loading) {
      localStorage.setItem('inventory_data', JSON.stringify(state.products));
    }
  }, [state.products, state.loading]);

  const deleteProduct = useCallback((id) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
  }, []);

  return { state, dispatch, deleteProduct };
};