import { combineReducers } from 'redux';
import InboxList from './InboxMessageListReducer'
import AddProduct from './AddProductReducer'

// Wrap all reducers in a container
export default combineReducers({
  AddProduct,
  InboxList
});