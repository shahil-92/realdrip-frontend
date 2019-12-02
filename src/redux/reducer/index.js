import { combineReducers } from 'redux';
import InboxList from './InboxMessageListReducer'
import WardLogin from './WardLoginReducer'

// Wrap all reducers in a container
export default combineReducers({
  WardLogin,
  InboxList
});