import { put, takeEvery, call } from 'redux-saga/effects'
import ApiCaller from '../../ApiCaller'

const API_DATA = (payload) => {
  console.log('==payload=',payload)
  const body = {
    email: payload.email,
    password: payload.password,
    userType: payload.userType
  }
  return ApiCaller(`users/login`, 'POST', body).then(response => response)
}
export const WARD_LOGIN_SAGA = function* perform_wardsignin() {
  yield takeEvery('WARD_LOGIN_SUBMIT', function* (action) {
    yield put({ type: 'WARD_LOGIN_STARTED' })
    try {
      const DATA = yield call(API_DATA.bind(this, action.payload))
      console.log("DATA>>> ", DATA)
      yield put({ type: 'WARD_LOGIN_SUCCESS', payload: DATA.data.data })
    } catch (error) {
      yield put({ type: 'WARD_LOGIN_FAILED' })
    }
  })
}
