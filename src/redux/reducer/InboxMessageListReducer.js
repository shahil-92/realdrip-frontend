export default function reducer(state = {
    inboxList : '',
  }, action) {
    switch (action.type) {
      case 'INBOX_LIST_INITATED': {
        return { ...state, changingStatus: 'uninitiated' };
      }
      case 'INBOX_LIST_STARTED': {
        return { ...state, changingStatus: 'ongoing' };
      }
      case 'INBOX_LIST_SUCCESS': {
        return { ...state, changingStatus: 'success', inboxList: action.payload };
      }
      case 'INBOX_LIST_FAILED': {
        return { ...state, changingStatus: 'failed' };
      }
      default: {
        return state;
      }
    }
  }
  