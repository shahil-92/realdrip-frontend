import { put, takeEvery, call } from 'redux-saga/effects'
import ApiCaller from '../../ApiCaller'

const API_DATA = (payload) => {
  console.log('===api nuese=')
  return ApiCaller(`nurse`, 'GET', null, localStorage.getItem('token')).then(response => response)
}
export const WARD_NURSE_SAGA = function* perform_wardnurse() {
  yield takeEvery('WARD_NURSE', function* (action) {
    yield put({ type: 'WARD_NURSE_STARTED' })
    try {
      const DATA = yield call(API_DATA.bind(this, action.payload))
      console.log("DATA>>> ", DATA.data)
      yield put({ type: 'WARD_NURSE_SUCCESS', payload: DATA.data })
    } catch (error) {
      yield put({ type: 'WARD_NURSE_FAILED' })
    }
  })
}
