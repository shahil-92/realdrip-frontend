import { combineReducers } from 'redux';
import WardNurse from './nurse/wardNurseReducer'
import WardLogin from './user/WardLoginReducer'
import WardInfusion from './infusion/wardInfusionReducer'
import WardDevice from './device/wardDeviceReducer'
// Wrap all reducers in a container
export default combineReducers({
  WardLogin,
  WardNurse,
  WardInfusion,
  WardDevice
});