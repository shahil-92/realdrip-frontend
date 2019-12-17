export default function reducer(state = {
    wardDevice : '',
  }, action) {
    switch (action.type) {
      case 'WARD_DEVICE_INITATED': {
        return { ...state, changingStatus: 'uninitiated' };
      }
      case 'WARD_DEVICE_STARTED': {
        return { ...state, changingStatus: 'ongoing' };
      }
      case 'WARD_DEVICE_SUCCESS': {
        return { ...state, changingStatus: 'success', wardDevice: action.payload };
      }
      case 'WARD_DEVICE_FAILED': {
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
  