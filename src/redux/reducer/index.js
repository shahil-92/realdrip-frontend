import { combineReducers } from 'redux';
import WardNurse from './wardNurseReducer'
import WardLogin from './WardLoginReducer'
import WardInfusion from './wardInfusionReducer'
import WardDevice from './wardDeviceReducer'
// Wrap all reducers in a container
export default combineReducers({
  WardLogin,
  WardNurse,
  WardInfusion,
  WardDevice
});