export default function reducer(state = {
  wardNurse : '',
}, action) {
  switch (action.type) {
    case 'WARD_NURSE_INITATED': {
      return { ...state, changingStatus: 'uninitiated' };
    }
    case 'WARD_NURSE_STARTED': {
      return { ...state, changingStatus: 'ongoing' };
    }
    case 'WARD_NURSE_SUCCESS': {
      return { ...state, changingStatus: 'success', wardNurse: action.payload };
    }
    case 'WARD_NURSE_FAILED': {
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
