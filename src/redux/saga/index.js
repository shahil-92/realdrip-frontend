import { all } from 'redux-saga/effects';
import { WARD_LOGIN_SAGA } from './wardLoginSaga';
import { WARD_NURSE_SAGA } from './wardNurseSaga';
import {WARD_INFUSION_SAGA} from './wardInfusionSaga'
import {WARD_DEVICE_SAGA} from './wardDeviceSaga'
// Wrap all sagas in a container FeedbackFormSaga
const rootSaga = function* rootSaga() {
	yield all([
		WARD_NURSE_SAGA(),
		WARD_LOGIN_SAGA(),
		WARD_INFUSION_SAGA(),
		WARD_DEVICE_SAGA()
	]);
};

export default rootSaga;
