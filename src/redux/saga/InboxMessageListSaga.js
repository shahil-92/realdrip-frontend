import { put, takeEvery, call } from 'redux-saga/effects'
import ApiCaller from '../ApiCaller';

const API_DATA = (payload) => {
  return ApiCaller(`marketplace/messages/?token=${payload.authToken}`, 'GET').then(response => response)
}
export const INBOX_LIST_SAGA = function* perform_inbox_list() {
  yield takeEvery('INBOX_LIST', function* (action) {

    yield put({ type: 'INBOX_LIST_STARTED' })
    try {
      const DATA = yield call(API_DATA.bind(this, action.payload))
      yield put({ type: 'INBOX_LIST_SUCCESS', payload: DATA })
    } catch (error) {
      console.log('ERRR>>>>', error)
      yield put({ type: 'INBOX_LIST_FAILED' })
    }
  })
}
