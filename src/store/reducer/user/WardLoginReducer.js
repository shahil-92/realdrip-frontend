export default function reducer(state = {
  wardLogin : '',
}, action) {
  switch (action.type) {
    case 'WARD_LOGIN_INITATED': {
      return { ...state, changingStatus: 'uninitiated' };
    }
    case 'WARD_LOGIN_STARTED': {
      return { ...state, changingStatus: 'ongoing' };
    }
    case 'WARD_LOGIN_SUCCESS': {
      return { ...state, changingStatus: 'success', wardLogin: action.payload };
    }
    case 'WARD_LOGIN_FAILED': {
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
