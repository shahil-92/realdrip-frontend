export default function reducer(state = {
    addProduct : '',
  }, action) {
    switch (action.type) {
      case 'ADD_PRODUCT_STARTED': {
        return { ...state, changingStatus: 'ongoing' };
      }
      case 'ADD_PRODUCT_SUCCESS': {
        return { ...state, changingStatus: 'success', addProduct: action.payload };
      }
      case 'ADD_PRODUCT_FAILED': {
        return { ...state, changingStatus: 'failed' };
      }
      default: {
        return state;
      }
    }
  }
  