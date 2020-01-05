import { put, takeEvery, call } from 'redux-saga/effects'
import ApiCaller from '../../ApiCaller'

const API_DATA = (payload) => {
  console.log('===api nuese=')
  return ApiCaller(`devices?status=active`, 'GET', null, localStorage.getItem('token')).then(response => response)
}
export const WARD_DEVICE_SAGA = function* perform_wardDevice() {
  yield takeEvery('WARD_DEVICE', function* (action) {
    yield put({ type: 'WARD_DEVICE_STARTED' })
    try {
      const DATA = yield call(API_DATA.bind(this, action.payload))
      console.log("DATA>>> ", DATA.data)
      yield put({ type: 'WARD_DEVICE_SUCCESS', payload: DATA.data })
    } catch (error) {
      yield put({ type: 'WARD_DEVICE_FAILED' })
    }
  })
}