export default function reducer(state = {
    wardInfusion : '',
  }, action) {
    switch (action.type) {
      case 'WARD_INFUSION_INITATED': {
        return { ...state, changingStatus: 'uninitiated' };
      }
      case 'WARD_INFUSION_STARTED': {
        return { ...state, changingStatus: 'ongoing' };
      }
      case 'WARD_INFUSION_SUCCESS': {
        return { ...state, changingStatus: 'success', wardInfusion: action.payload };
      }
      case 'WARD_INFUSION_FAILED': {
        return { ...state, changingStatus: 'failed' };
      }
      case 'RESET': {
        return { state: '' }
      }
      default: {
        return state;
      }
    }
  }
  