import { useReducer, useEffect, useCallback } from 'react';
import { productReducer, initialState } from '../reducers/productReducer';

export const useProducts = () => {
  const [state, dispatch] = useReducer(productReducer, initialState, (initial) => {
    const saved = localStorage.getItem('products');
    return saved ? { ...initial, products: JSON.parse(saved), loading: false } : initial;
  });

  useEffect(() => {
    if (state.products.length === 0 && state.loading) {
      const initialData = [
        { id: 1, name: 'MacBook Pro M3', price: 1999, inStock: true, image: '/images/laptop.jpg' },
        { id: 2, name: 'iPhone 15 Pro', price: 1099, inStock: true, image: '/images/phone.jpg' },
        { id: 3, name: 'Sony Headphones', price: 349, inStock: false, image: '/images/headphones.jpg' },
        { id: 4, name: 'Apple Watch Series 9', price: 399, inStock: true, image: '/images/watch.jpg' },
        { id: 5, name: 'Logitech G Pro Mouse', price: 129, inStock: true, image: '/images/mouse.jpg' },
        { id: 6, name: 'JBL Flip 6 Speaker', price: 119, inStock: true, image: '/images/speaker.jpg' }
      ];
      
      const timer = setTimeout(() => {
        dispatch({ type: 'LOAD_DATA', payload: initialData });
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [state.products.length, state.loading]);

  useEffect(() => {
    if (!state.loading) {
      localStorage.setItem('products', JSON.stringify(state.products));
    }
  }, [state.products, state.loading]);

  const deleteProduct = useCallback((id) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
  }, []);

  return { state, dispatch, deleteProduct };
};