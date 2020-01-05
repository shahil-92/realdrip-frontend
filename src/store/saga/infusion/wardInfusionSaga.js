import { put, takeEvery, call } from 'redux-saga/effects'
import ApiCaller from '../../ApiCaller'

const API_DATA = (payload) => {
  console.log('===api nuese=')
  return ApiCaller(`infusion`, 'GET', null, localStorage.getItem('token')).then(response => response)
}
export const WARD_INFUSION_SAGA = function* perform_wardinfusion() {
  yield takeEvery('WARD_INFUSION', function* (action) {
    yield put({ type: 'WARD_INFUSION_STARTED' })
    try {
      const DATA = yield call(API_DATA.bind(this, action.payload))
      console.log("DATA>>> ", DATA.data)
      yield put({ type: 'WARD_INFUSION_SUCCESS', payload: DATA.data })
    } catch (error) {
      yield put({ type: 'WARD_INFUSION_FAILED' })
    }
  })
}