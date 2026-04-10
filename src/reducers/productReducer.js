export const initialState = {
  products: [],
  loading: true,
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return { ...state, products: action.payload, loading: false };
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    case 'DELETE_PRODUCT':
      return { ...state, products: state.products.filter(p => p.id !== action.payload) };
    case 'UPDATE_PRODUCT':
      return { ...state, products: state.products.map(p => p.id === action.payload.id ? action.payload : p) };
    case 'TOGGLE_STOCK':
      return { ...state, products: state.products.map(p => p.id === action.payload ? { ...p, inStock: !p.inStock } : p) };
    default:
      return state;
  }
};