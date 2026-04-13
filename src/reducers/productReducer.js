export const initialState = {
  products: [],
  loading: true,
  searchQuery: '',
  filterStock: 'all'
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
    case 'SET_SEARCH':
      return { ...state, searchQuery: action.payload };
    case 'SET_FILTER':
      return { ...state, filterStock: action.payload };
    default:
      return state;
  }
};